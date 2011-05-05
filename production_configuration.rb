require 'sinatra'
require 'json'
require 'mongo'
include Mongo
require File.dirname(__FILE__) + '/histogram.rb'

set :views, File.dirname(__FILE__) + "/views"

get '/' do
  erb :home
end

get '/about' do
  erb :about
end

get '/word_cloud' do
  erb :word_cloud
end

get '/tweet_word_cloud' do
  connection_string = "flame.mongohq.com"
  mongo_connection = Mongo::Connection.new(connection_string, 27018)
  db = mongo_connection.db("AltNetMiner")
  if db.authenticate("darkxanthos", "abc123!")
    test_collection = db['AltNetSeattleMentions']
    tweets = db['AltNetSeattleMentions'].find({}).select{|tweet| tweet}
    histogram = create_word_histogram_from tweets
    histogram.sort_by{|pair| pair[1]}
    return histogram.take(100).to_json
  end

  return "[]"

end

get '/tweets' do
  connection_string = "flame.mongohq.com"
  mongo_connection = Mongo::Connection.new(connection_string, 27018)
  db = mongo_connection.db("AltNetMiner")
  if db.authenticate("darkxanthos", "abc123!")
    test_collection = db['AltNetSeattleMentions']
    tweets = db['AltNetSeattleMentions'].find({}).select{|tweet| tweet}

    return tweets.to_json
  end

  return "[]"
end
require 'sinatra'
require 'mongo'
include Mongo

set :views, File.dirname(__FILE__) + "/views"

get '/' do
  erb :home
end

get '/about' do
  erb :about
end

get '/tweets' do
  connection_string = "flame.mongohq.com"
  mongo_connection = Mongo::Connection.new(connection_string, 27018)
  db = mongo_connection.db("AltNetMiner")
  if db.authenticate("darkxanthos", "abc123!")
    test_collection = db['AltNetSeattleMentions']
    tweets = db['AltNetSeattleMentions'].find({}).select{|tweet| tweet}

    return tweets.inspect
  end

  return "[]"
end
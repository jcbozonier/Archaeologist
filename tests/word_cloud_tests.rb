require 'test/unit'
require Dir.pwd + '/histogram.rb'

class WordCloudTests < Test::Unit::TestCase
  def test_when_there_are_no_tweets
    tweets = []

    histogram = create_word_histogram_from tweets

    assert_equal histogram, [], "histogram should be empty"
  end

  def test_when_there_is_one_tweet_with_one_word
    tweets =
    [
      {
        "text"=>"BLING"
      }
    ]

    histogram = create_word_histogram_from tweets

    assert_equal [["bling", 1]], histogram, "should count the occurence of the only word in the tweet."
  end

  def test_when_there_are_multiple_tweets_with_different_words
    tweets =
    [
      {
        "text"=>"BLING"
      },
      {
        "text"=>"BLING2"
      }
    ]

    histogram = create_word_histogram_from tweets

    assert_equal [["bling", 1],["bling2",1]], histogram, "should add an entry for each word."
  end

  def test_when_there_are_multiple_tweets_with_same_words
    tweets =
    [
      {
        "text"=>"BLING"
      },
      {
        "text"=>"BLING"
      }
    ]

    histogram = create_word_histogram_from tweets

    assert_equal [["bling", 2]], histogram, "should sum entry for like words."
  end

   def test_when_there_is_one_tweet_with_multiple_words
    tweets =
    [
      {
        "text"=>"BLING BLING2"
      }
    ]

    histogram = create_word_histogram_from tweets

    assert_equal [["bling", 1], ["bling2", 1]], histogram, "should find all words in tweet."
  end

  def test_when_there_is_one_tweet_with_multiple_of_same_words
    tweets =
    [
      {
        "text"=>"BLING BLING"
      }
    ]

    histogram = create_word_histogram_from tweets

    assert_equal [["bling", 2]], histogram, "should group the words in the tweet"
  end

  def test_sentences_in_tweets_should_exclude_periods
    tweets =
    [
      {
        "text"=>"Bob ran fast."
      }
    ]

    histogram = create_word_histogram_from tweets

    assert_equal [["bob", 1], ["ran", 1], ["fast", 1]].sort, histogram.sort, "should group the words in the tweet"
  end

  def test_real_live_tweet
    tweets =
    [
      {
        "text"=>"@scottgal:Biggest pain in .Net dev...well almost"
      }
    ]

    histogram = create_word_histogram_from tweets
    expected_histogram = [["pain", 1],
     ["almost", 1],
     ["in", 1],
     ["@scottgal", 1],
     ["biggest", 1],
     ["well", 1],
     ["net", 1],
     ["dev", 1]]

    assert_equal expected_histogram.sort, histogram.sort, "should"
  end

  def test_altnetseattle_hashtag_is_removed
    tweets =
    [
      {
        "text"=>"#altnetseattle the be to at a of this Because\"?"
      }
    ]

    histogram = create_word_histogram_from tweets

    assert_equal [], histogram, "should remove #altnetseattle from string"
  end

  def test_uppercase_is_same_as_lowercase_word
    tweets =
    [
      {
        "text"=>"BLING bling"
      }
    ]

    histogram = create_word_histogram_from tweets

    assert_equal [["bling", 2]], histogram, "should group the words in the tweet"
  end
end
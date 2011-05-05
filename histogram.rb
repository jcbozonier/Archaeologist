def create_word_histogram_from tweets
  words_to_ignore = [
    "#altnetseattle",
    "to",
    "the",
    "of",
    "this",
    "because",
    "be",
    "at",
    "a"
  ]

  words_found = {}

  tweets.each do |tweet|
    tweet_body = tweet["text"]

    for_each_word_in tweet_body do |word|
      word = word.downcase
      if !words_to_ignore.include? word
        if !words_found.has_key? word
          words_found[word] = 1
        else
          words_found[word] += 1
        end
      end
    end
  end

  histogram = []
  words_found.each do |word, count|
    histogram << [word, count]
  end

  histogram
end

def for_each_word_in text
  non_word_characters = ['.',':', ' ', '"', '?', ',', '\'', '!', '(', ')', '[', ']', ';']

  current_word = ""

  text.each_char do |character|
    if non_word_characters.include? character
      yield current_word if current_word != ""

      current_word = ""
    else
      current_word += character
    end
  end

  yield current_word if current_word != ""
end
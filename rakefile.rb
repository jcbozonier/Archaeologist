task :default => [:test]

task :test do
  ruby 'tests/word_cloud_tests.rb'
end
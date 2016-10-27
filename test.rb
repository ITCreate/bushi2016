# coding: utf-8
require "rubygems"
require "bundler/setup"
require "redcarpet"

def convert(file_name)
  markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML)
  File.open("./#{file_name}.md", "r:UTF-8") do |file|
    markdown.render(file.read)
  end
end

def publish_html(file_name, title)
  html = <<-EOS
<html>
  <title>#{title}</title>
  <meta charset="utf-8">
  <div>#{convert(file_name)}</div>
  EOS

  File.open("./#{file_name}.html", "w:UTF-8") do |file|
    file.write(html)
  end
end

puts 'mdファイル名'
file = gets.chomp
puts 'タイトル'
title = gets.chomp

publish_html(file, title)

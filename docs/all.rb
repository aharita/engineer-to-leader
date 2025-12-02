#!/usr/bin/env ruby

# Find all .md files recursively
md_files = Dir.glob('**/*.md').sort

if md_files.empty?
  puts "No .md files found."
  exit 1
end

# Open all.md for writing
File.open('all.md', 'w') do |output|
  md_files.each do |file|
    puts "Processing: #{file}"
    
    # Read the file content
    content = File.read(file)
    
    # Write a header with the filename
    output.puts "# Source: #{file}\n\n"
    
    # Write the file content
    output.puts content
    
    # Add a separator between files
    output.puts "\n\n---\n\n"
  end
end

puts "Done! Combined #{md_files.length} files into all.md"

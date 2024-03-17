
import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.7.1"
const supabaseUrl = 'https://uhzanjzmmmltliylrraq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoemFuanptbW1sdGxpeWxycmFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA2MzAyNzIsImV4cCI6MjAyNjIwNjI3Mn0.TqeD2Ar_0jCTU-CNSl6VcODZUdWUWMoy_Hhs19b0Ocs'
const supabase = createClient(supabaseUrl, supabaseKey);


async function GetBooks(){
  let { data: books, error } = await supabase
.from('books')
.select('*')

  for (let book of books) {
    let bookList = document.getElementById('books')
    bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.ISBN}</td></tr>`;
   }
  }
  GetBooks();

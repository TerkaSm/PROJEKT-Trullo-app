import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://mcgfebhjfstjooftcprn.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jZ2ZlYmhqZnN0am9vZnRjcHJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc1NTk5MDMsImV4cCI6MjAyMzEzNTkwM30.kHg3fGuDhfYTC1YzpnBwzuyrISj0cCVfQKo0_GvI5CM";

export const supabase = createClient(supabaseURL, supabaseAnonKey)

  // data ze Supabase


  // useEffect(() => {
  //   getData();
  // }, [])

  // async function getData() {
  //   try {
  //     const { data, error } = await supabase
  //     .from("data")
  //     .select('*')
  //   if (error) throw error;
  //   if (data !== null) {
  //     console.log(data) 
  //     setLists(data)
  //   }
  //   } catch (error) {
  //     alert('Error!', error)
  //   }
  // }


  // async function createList() {
  //   try {
  //     const { data, error } = await supabase
  //     .from("data")
  //     .insert({
  //       title: title,
  //       //cards: cards,
  //     })
  //     .single()

  //   if (error) throw error;
  //   window.location.reload();
  //   } catch (error) {
  //     alert('Error!', error)
  //   }
  // }

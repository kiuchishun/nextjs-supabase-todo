"use server";
import { revalidatePath } from "next/cache";
import { supabase } from "../lib/supabase";

export async function updateCompleted(formData: FormData) {
  const id = formData.get("id");
  const completed = formData.get("completed");
  const current = completed === "true";

 
  const { error } = await supabase
  .from('todos')
  .update({ completed: !current})
  .eq('id', id)

  revalidatePath("/")
  console.log(error)
}

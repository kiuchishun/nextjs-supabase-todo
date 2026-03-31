"use server";

import { revalidatePath } from "next/cache";
import { supabase } from "../lib/supabase";

export async function deleteItem(formData: FormData) {
  const id = formData.get("id");
  const response = await supabase.from("todos").delete().eq("id", id);

  revalidatePath("/");
}

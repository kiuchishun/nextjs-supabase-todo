"use server";

import { revalidatePath } from "next/cache";
import { supabase } from "../lib/supabase";
type State = {
  msg: string;
};
export async function createTodo(
  prevState: State,
  formData: FormData,
): Promise<State> {
  const content = formData.get("content");
  if (content === "") {
    return { msg: "入力が空です" };
  }

  const { error } = await supabase.from("todos").insert({ content: content });
 

  if (error) {
    return { msg: "登録失敗" };
  }
 revalidatePath("/");
  return { msg: "登録完了" };
}

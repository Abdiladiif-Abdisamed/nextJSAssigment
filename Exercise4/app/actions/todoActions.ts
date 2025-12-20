'use server'
import Todo from '@/models/Todo'
export async function createTodoAction(prev:any, formData:FormData){
 const title=formData.get('title') as string
 const priority=formData.get('priority') as string
 if(!title) return {error:'Title required'}
 await Todo.create({title, priority})
 return {success:true}
}
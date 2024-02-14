"use client"
import { useState } from "react"
import { TodoItens } from "./types/type"

const Page = () => {
  const [ isChacked, setIsChecked ] = useState('')
  const [ list, setList ] = useState<TodoItens[]>([])

  function handleAddBtn(){
    if(isChacked.trim() === '') return
      setList([
        ...list,
        { id: Date.now(), label: isChacked, checked: false }])
  }

  function delItem(id: number) {
    setList(
      list.filter(item => item.id !== id),
    )
  }

  function toggleItem(id: number){
    let newList = [...list]

      for(let i in newList){
        if(newList[i].id === id) {
          newList[i].checked = !newList[i].checked
        }
      }
      setList(newList)
  }

  return (
    <div className="flex justify-center w-screen h-screen flex-col justify-center items-center text-3xl">
      <h1 className="text-4xl ml-5">Lista de Tarefas</h1>
        <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2">
          <input 
            type="text"
            placeholder="O que dejesa Fazer?"
            className="flex-1 border border-white p-3 text-2xl text-black rounded-md mr-3"
            value={isChacked}
            onChange={e => setIsChecked(e.target.value)}
          />
          <button onClick={handleAddBtn}>Adicionar</button>
        </div>

        <div className="w-full max-w-lg list-disc pl-5">
            <h3 className="my-4">Itens na lista - {list.length}</h3>
          <ul>
          {list.map(item => (
            <li key={item.id}>
              <input type="checkbox" onClick={() => toggleItem(item.id)} checked={item.checked} className="w-6 h-6 mr-3"/>
              {item.label} - <button onClick={() => delItem(item.id)}
                  > DELETAR </button>
            </li>
          ))}
          
        </ul>
        </div>
    </div>
  )
}

export default Page
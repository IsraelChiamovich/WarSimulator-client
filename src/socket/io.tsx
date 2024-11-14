// src/socket/io.tsx

import { addAttack, useAppDispatch } from "../store/store";
import { socket } from "../main";
import { IAttack } from "../types/attack";

export const IO_functions = ()=>{
    const dispatch = useAppDispatch();
    socket.on("launched", (data:IAttack)=>dispatch(addAttack(data)));
}
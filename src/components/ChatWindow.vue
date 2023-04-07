<template>
  <div class="chat-window">
    <div class="error" v-if="error">{{ error }}</div>
    <div v-if="documents" class="messages" ref="messages">
        <div v-for="doc in formatedDocuments" :key="doc.id" class="single">
<span class="created-at">
    {{ doc.createdAt }}
</span>
<span class="name">
    {{ doc.name }}
</span>
<span class="message">
    {{ doc.message }}
</span>
<button v-if="asd ==  doc.uid " class="delete" @click="()=>handleDelete(doc.uid,doc.id)">Delete</button>
        </div>
        
    </div>
  </div>
</template>

<script>
import { computed, ref,onUpdated } from "vue"
import getCollection from "../composables/getCollection"
import deleteMessage from "../composables/deleteMessage"
import {formatDistanceToNow} from "date-fns"
import getUser from '@/composables/getUser'



export default {
setup() {
const {user}=getUser()
const asd=ref(user?._rawValue.uid)
    const {error,documents}=getCollection("messages")
const formatedDocuments=computed(()=>{
    if(documents.value){
        return documents.value.map((doc)=>{
            let time =formatDistanceToNow(doc.createdAt.toDate())
            return {...doc,createdAt:time}
        })
    }
})

const messages=ref(null)
onUpdated(()=>{
    messages.value.scrollTop=messages.value.scrollHeight
})
const handleDelete=(uid,id)=>{
    deleteMessage(uid,id)
}
    return {error,documents,formatedDocuments,messages,handleDelete,asd}
}

}
</script>

<style>
.chat-window{
    background: #fafafa;
    padding: 30px 20px;
    text-align: left;
}
.single{
    margin: 18px 0;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;

    box-shadow: 0px 2px 5px 0px gray;
}
.created-at{
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 5px;
}
.name{
    font-weight: bold;
    margin-right: 7px;
}
.messages{
max-height: 400px;
overflow: auto;
}
.delete{
    position: absolute;
    right: 0;
    background: red;
    cursor: pointer;
}
</style>
import {  useState,useEffect} from "react"
import {DATABASE_ID ,COLLECTION_ID_MESSAGES, databases} from "../appwrite"
import {ID} from 'appwrite'

const Room = () => {

  const[messages , setMessages]=useState([]);

   useEffect(()=>{
            getMessages()
    },[])

  const [messageBody,setMessageBody]=useState('');
   
    const handleSubmit=async (e)=>{
      e.preventDefault()

      let payload={
        body: messageBody
      }

      let response= await databases.createDocument(
        DATABASE_ID,COLLECTION_ID_MESSAGES, ID.unique(),
        payload
      )

      console.log(response);
      
      setMessages(prevState => [response , ...prevState])

      setMessageBody('') // reset the page
    }

    const getMessages = async () => {
          const response =  await databases.listDocuments(DATABASE_ID , COLLECTION_ID_MESSAGES);
          console.log('Response is : ',response);
          setMessages(response.documents)
    }
  return ( 
   <>
    <main className="container">

    <div className="room--container">

      <form id="message--form" onSubmit={handleSubmit}>
        <div>
          <textarea required maxLength="1000" placeholder="Say something..." 
          value={messageBody}
          onChange={(e)=>{setMessageBody(e.target.value)}} ></textarea>
        </div>
        <div className="send-btn--wrapper">
          <input className="btn btn--secondary" type="submit" value="Send" />
        </div>
      </form>
      <div>
        {
          messages.map(message=>
            <div key={message.$id} className="message--wrapper">

              <div className="message--header">
                <small className="message-timestamp">{message.$createdAt}</small>
              </div>
              <div className="message--body">
                <span>{message.body }</span>
               
              </div>
            </div>
          )
        }
      </div>
      </div>
    </main>
   </>
  )

}

export default Room
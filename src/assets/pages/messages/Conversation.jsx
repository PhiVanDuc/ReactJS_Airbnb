import ConversationHeader from './ConversationHeader'
import ConversationContent from './ConversationContent'
import ConversationForm from './ConversationForm'

export default function Conversation({ setShowList }) {
    return (
        <div className='flex-grow h-full flex flex-col'>
            <ConversationHeader setShowList={setShowList} />
            <ConversationContent />
            <ConversationForm />
        </div>
    )
}
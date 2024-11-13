import { useState } from 'react';

import ConversationList from './ConversationList';
import Conversation from './Conversation';

export default function Messages() {
    const [showList, setShowList] = useState(false);

    return (
        <div className='h-full flex items-start'>
            <ConversationList showList={showList} setShowList={setShowList} />
            <Conversation setShowList={setShowList} />
        </div>
    )
}

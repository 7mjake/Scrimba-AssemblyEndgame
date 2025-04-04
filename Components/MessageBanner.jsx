import classNames from 'classnames'

export default function MessageBanner(props) {

    const message = props.message
    const messageType = props.messageType

    return <h2 
            className={classNames(
                "message-banner",
                {
                    "message-wrong" : messageType === "wrong",
                    "message-win"  : messageType === "win",
                    "message-lose" : messageType === "lose"
                }
            )}
        >{message}</h2>
}
import InfoIcon from '../info.png'

const InfoButton = ({onClick, size1}) => {
    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img 
            src={InfoIcon} 
            onClick={onClick} 
            style={{
                width: `${size1}px`,
                height: `${size1}px !important` ,
            }} 
        />
    )
}

export default InfoButton;
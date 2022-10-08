import React from 'react'
import { useSelector } from 'react-redux';
import EditLogDialog from './EditLogDialog';

const LogBox = ({el}) => {

    const listLogs = useSelector((state) => state?.log?.listLogs);
    const date = useSelector((state) => state?.log?.date);

    const logData = listLogs.find(log => log.medicineId === el.id 
            && log.date === date)

  return (

    <div className="d-flex align-items-center">
        {
            logData?.time ? <div className='me-3'>✅</div> 
            : <div className='me-3'>❌</div> 
        }
        <div className='me-3'>{el.name}</div>
        <div className='me-3'>{el.form} x {el.quantity}</div>
        <div className='me-3'> {logData?.time}</div>
        <EditLogDialog el={el}/>
    </div>
  )
}

export default LogBox;

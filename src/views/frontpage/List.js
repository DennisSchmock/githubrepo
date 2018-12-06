import React from 'react'

const List = ({list}) => {

    return (
        <div className="table">
            {list.map(item =>
                    <div key={item.objectID} className="table-row">
                        <span style={{width: '100%'}}> {item.name} </span>
                    </div>
            )}
        </div>
    )


}

export default List

import React, { FC } from 'react';


 const HelloWorld: FC = () => {
  const [name, _setName] = Retool.useStateString({
    name: 'name'
  })

  return (
    <div className="test">
      <div>Hello {name}!</div>
      <div>Nice to meet you {name}</div>
      <p>test HelloWolrld2</p>
    </div>
  )
}

export default HelloWorld;
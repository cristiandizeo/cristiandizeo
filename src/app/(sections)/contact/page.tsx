import React from 'react'

export default async function contact() {
  await new Promise(resolve => setTimeout(resolve, 2000));

  return (
    <div>page</div>
  )
}

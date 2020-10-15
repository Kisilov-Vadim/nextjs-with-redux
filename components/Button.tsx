import React from 'react'
import { useSelector } from 'react-redux';

interface Props {
  title: string
  onClick: () => void
}

export default function Button({ title, onClick }: Props) {
  const count = useSelector(({ counter }) => counter.count);

  console.log(count)

  return (
    <button onClick={onClick}>{ title }</button>
  )
}

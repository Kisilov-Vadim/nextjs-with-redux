import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';

//actions
import { setValueDecrease, setValueIncrease } from '../store/actions/actions';

export default function Home() {
  const count = useSelector(({ counter }) => counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Count: { count }</h1>
      <div style={{ display: 'flex' }}>
        <button 
          onClick={() => dispatch(setValueDecrease())}
        >
          +
        </button>
        <button
          onClick={() => dispatch(setValueIncrease())}
        >
          -
        </button>
      </div>
      <Link href="/posts" getStaticProps={true}>
          <a>All Posts</a>
      </Link>
    </>
  )
}

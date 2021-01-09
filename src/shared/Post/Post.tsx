import React, {useEffect, useRef} from 'react';
import ReactDom from 'react-dom';
import styles from './post.css';
import {CommentForm} from "../CommentForm";

interface IPost {
 onClose?: () => void;
}

export function Post(props: IPost) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {

      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
       props.onClose?.();
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }

  }, [])


  const node = document.querySelector('#react_root')
  if (!node) return null;

  return ReactDom.createPortal((
  <div className={styles.modal} ref={ref}>
  <h2 className={styles.title}>Title of modal</h2>
    <div className={styles.content}>
      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate libero non sagittis condimentum. Sed laoreet erat ac ipsum posuere, quis pellentesque sapien porta. Cras ullamcorper, est vitae dictum pellentesque, lorem nulla congue augue, non lobortis tortor turpis nec mauris. Nullam pellentesque tincidunt faucibus.</p>
      <p>Sed ipsum eros, vestibulum vel gravida eget, facilisis eu tortor. Aliquam mollis sapien sapien, eget iaculis sem pulvinar vitae. Nam congue tortor a velit auctor laoreet. Phasellus ac bibendum ligula. Integer convallis dui commodo quam aliquet consectetur. Sed non sapien sapien.</p>
      <p> In tincidunt placerat sem eu suscipit. Mauris commodo vestibulum arcu, dictum euismod quam dignissim non. Mauris at suscipit quam.</p>
    </div>
    <CommentForm />
  </div>
  ), node);
}

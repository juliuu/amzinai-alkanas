import React, { useState, useEffect, useRef } from 'react';
import { useForm } from '../../hooks';

import {
  CommentsContainer,
  CommentWrapper,
  CommentPic,
  BlankPic,
  CommentSection,
  CommentData,
  CommentReply,
  FirstComment,
  Form,
  Label,
  TextArea,
  Input,
  CancelButton,
} from './comments.styles';

import LoadingButton from '../loadingButton/loadingButton.component';

const Comments = ({ id }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState(null);
  const [commentCount, setCommentCount] = useState(0);
  const [refreshComments, setRefreshComments] = useState(false);

  const [formStarted, setFormStarted] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [formData, setFormData, clearFormData] = useForm({
    comment: '',
    author: '',
    email: '',
  });
  const [formSent, setFormSent] = useState('pending');

  const commentFocus = useRef();

  // Fetch comment data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(`/api/comments/${id}`).then((res) => res.json());

        if (refreshComments) {
          setFormSent('confirmed');
        }

        setComments(result.data);
        setCommentCount(result.count);
        setRefreshComments(false);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    };

    fetchData();
  }, [id, refreshComments]); // TODO: check if refresh comments is actually needed

  useEffect(() => {
    if (comments && commentCount >= 0) setIsLoaded(true);
  }, [comments, commentCount]);

  // Check if all fields in formData are not empty, if so, enable submit button
  useEffect(() => {
    if (formData.comment && formData.author && formData.email) setDisabled(false);
    else {
      setDisabled(true);
      setFormSent('pending');
    }
  }, [formData]);

  const handleCancel = () => {
    clearFormData();
    setDisabled(true);
    setFormStarted(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSent('loading');

    fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ articleId: id, ...formData }),
    }).then(() => {
      setRefreshComments(true);
      setTimeout(() => {
        setFormStarted(false);
        clearFormData();
      }, 2000);
    });
  };

  if (error) {
    return <div>Error: {error.message}</div>; // TODO: make a simple error page
  } else if (!isLoaded) {
    return <div>Loading...</div>; // TODO: make a cool loading component
  } else {
    return (
      <CommentsContainer>
        <h1>KOMENTARAI</h1>
        {commentCount ? <span style={{ fontWeight: 'bold' }}>Komentarų: {commentCount}</span> : null}
        {comments.map((comment) => (
          <CommentWrapper key={comment._id}>
            {comment.imgUrl ? <CommentPic src={comment.imgUrl} alt="user" /> : <BlankPic>{comment.author[0].toUpperCase()}</BlankPic>}
            <CommentSection>
              <FirstComment>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <CommentData>
                    <p style={{ fontSize: '0.8rem', fontWeight: 'bold', marginRight: '0.3rem' }}>{comment.author}</p>
                    <p style={{ color: 'grey', fontSize: '0.7rem' }}>{comment.timestamp}</p>
                  </CommentData>
                  {comment.comment}
                </div>
                <CommentReply
                  id="commentId"
                  value={comment.commentId}
                  onClick={(e) => {
                    setFormStarted(true);
                    setFormData(e);
                    commentFocus.current.focus();
                    commentFocus.current.scrollIntoView();
                  }}
                >
                  Atsakyti
                </CommentReply>
              </FirstComment>
              {comment.replies.length > 0
                ? comment.replies.map((reply) => (
                    <CommentWrapper key={reply._id}>
                      {reply.imgUrl ? <CommentPic src={reply.imgUrl} alt="user" /> : <BlankPic>{reply.author[0].toUpperCase()}</BlankPic>}
                      <CommentSection>
                        <CommentData>
                          <p style={{ fontSize: '0.8rem', fontWeight: 'bold', marginRight: '0.3rem' }}>{reply.author}</p>
                          <p style={{ color: 'grey', fontSize: '0.7rem' }}>{reply.timestamp}</p>
                        </CommentData>
                        {reply.comment}
                      </CommentSection>
                    </CommentWrapper>
                  ))
                : null}
            </CommentSection>
          </CommentWrapper>
        ))}
        <Form onSubmit={handleFormSubmit}>
          <Label htmlFor="comment">Parašyk komentarą</Label>
          <TextArea
            ref={commentFocus}
            type="textArea"
            id="comment"
            placeholder="Savo komentarą įrašyk čia..."
            value={formData.comment}
            onChange={setFormData}
            onClick={() => setFormStarted(true)}
            required
          />
          {formStarted ? (
            <>
              <Label htmlFor="author">Įvesk savo duomenis</Label>
              <Input type="text" id="author" placeholder="Vardas" value={formData.author} onChange={setFormData} required />
              <Input type="email" id="email" placeholder="El. pašto adresas" value={formData.email} onChange={setFormData} required />
              <div>
                <CancelButton type="reset" value="Atšaukti" onClick={handleCancel} />
                <LoadingButton disabled={disabled} type="submit" formSent={formSent} value="Įrašyti komentarą" valueConfirmed="Įrašyta" />
              </div>
            </>
          ) : null}
        </Form>
      </CommentsContainer>
    );
  }
};

export default Comments;

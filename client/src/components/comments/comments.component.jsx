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
} from './comments.styles';

import { Button } from '..';

const Comments = ({ id }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState(null);
  const [commentCount, setCommentCount] = useState(0);
  const [refreshComments, setRefreshComments] = useState(false);
  const [formStarted, setFormStarted] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [formSent, setFormSent] = useState('pending');
  const [limit, setLimit] = useState(3);
  const [showReplies, setShowReplies] = useState([]);

  const { formData, setFormData, clearFormData } = useForm({
    comment: '',
    author: '',
    email: '',
  });

  const commentFocus = useRef();

  // Fetch comment data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(`/api/comments/${id}?limit=${limit}`).then((res) => res.json());

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
  }, [id, refreshComments, limit]);

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

  const expandComments = () => {
    setLimit((current) => (current += 3));
  };

  const expandReplies = (commentId) => {
    setShowReplies((showReplies) => {
      showReplies.push(commentId);
      return showReplies;
    });
    setRefreshComments(true);
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
            {comment.imgUrl ? (
              <CommentPic src={comment.imgUrl} alt="user" />
            ) : (
              <BlankPic>{comment.author[0].toUpperCase()}</BlankPic>
            )}
            <CommentSection>
              <FirstComment>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <CommentData>
                    <p
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                        marginRight: '0.3rem',
                      }}
                    >
                      {comment.author}
                    </p>
                    <p style={{ color: 'grey', fontSize: '0.7rem' }}>{comment.timestamp}</p>
                  </CommentData>
                  <p>{comment.comment}</p>
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
                </div>
              </FirstComment>
              {comment.replies.length > 0 ? (
                !showReplies.includes(comment.commentId) ? (
                  <Button
                    data-type="icon"
                    color="red"
                    onClick={() => expandReplies(comment.commentId)}
                    style={{ display: 'flex', alignItems: 'center', padding: 0, paddingTop: '0.5rem' }}
                  >
                    <span className="material-icons-outlined">expand_more</span>
                    Rodyti ({comment.replies.length}) ataskymų
                  </Button>
                ) : (
                  comment.replies.map((reply) => (
                    <CommentWrapper key={reply._id} style={{ marginBottom: 0 }}>
                      {reply.imgUrl ? (
                        <CommentPic src={reply.imgUrl} alt="user" />
                      ) : (
                        <BlankPic>{reply.author[0].toUpperCase()}</BlankPic>
                      )}
                      <CommentSection>
                        <CommentData>
                          <p
                            style={{
                              fontSize: '0.8rem',
                              fontWeight: 'bold',
                              marginRight: '0.3rem',
                            }}
                          >
                            {reply.author}
                          </p>
                          <p style={{ color: 'grey', fontSize: '0.7rem' }}>{reply.timestamp}</p>
                        </CommentData>
                        {reply.comment}
                      </CommentSection>
                    </CommentWrapper>
                  ))
                )
              ) : null}
            </CommentSection>
          </CommentWrapper>
        ))}
        {limit < commentCount && (
          <Button
            data-type="icon"
            color="red"
            onClick={expandComments}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <span className="material-icons-outlined">expand_more</span>
            Rodyti senesnius komentarus
          </Button>
        )}
        <Form onSubmit={handleFormSubmit} style={{ paddingTop: '1rem' }}>
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
          {formStarted && (
            <>
              <Label htmlFor="author">Įvesk savo duomenis</Label>
              <Input
                type="text"
                id="author"
                placeholder="Vardas"
                value={formData.author}
                onChange={setFormData}
                required
              />
              <Input
                type="email"
                id="email"
                placeholder="El. pašto adresas"
                value={formData.email}
                onChange={setFormData}
                required
              />
              <div>
                <Button data-type="cancel" type="reset" onClick={handleCancel}>
                  Atšaukti
                </Button>
                <Button
                  data-type="loading"
                  disabled={disabled}
                  type="submit"
                  formSent={formSent}
                  value="Įrašyti komentarą"
                  valueConfirmed="Įrašyta"
                />
              </div>
            </>
          )}
        </Form>
      </CommentsContainer>
    );
  }
};

export default Comments;

import React, { useState, useEffect, useRef } from 'react';
import { useForm } from '../../hooks';

// TODO: move fetch logic here
// TODO: add full error handling
// TODO: maybe add skeletons..
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
  SubmitButton,
} from './comments.styles';

const Comments = ({ children: { comments, commentCount }, id, refreshComments }) => {
  const [formStarted, setFormStarted] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [formData, setFormData, clearFormData] = useForm({
    comment: '',
    author: '',
    email: '',
  });

  const commentFocus = useRef();

  useEffect(() => {
    if (formData.comment && formData.author && formData.email) setDisabled(false);
  }, [formData]);

  const handleCancel = () => {
    clearFormData();
    setDisabled(true);
    setFormStarted(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ articleId: id, ...formData }),
    }).then(() => {
      // TODO: when button animation ends
      refreshComments();
      clearFormData();
    });
  };

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
              <SubmitButton disabled={disabled} type="submit" value="Įrašyti komentarą" />
            </div>
          </>
        ) : null}
      </Form>
    </CommentsContainer>
  );
};

export default Comments;

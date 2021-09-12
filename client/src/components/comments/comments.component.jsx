import React, { useState, useEffect } from 'react';

import {
  CommentsContainer,
  CommentWrapper,
  CommentPic,
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

const Comments = ({ children }) => {
  const [formStarted, setFormStarted] = useState(false);
  const [userComment, setUserComment] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (userComment && username && email) setDisabled(false);
  }, [userComment, username, email]);

  const handleCancel = () => {
    setUserComment("");
    setUsername(null);
    setEmail(null);
    setDisabled(true);
    setFormStarted(false);
  }

  const count = 3;
  return (
    <CommentsContainer>
      <h1>KOMENTARAI</h1>
      <span style={{ fontWeight: 'bold' }}>Komentarų: {count}</span>
      {children.comments.map((comment) => (
        <CommentWrapper key={comment.commentId}>
          <CommentPic url={comment.imgUrl} />
          <CommentSection>
            <FirstComment>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <CommentData>
                  <p style={{ fontSize: '0.8rem', fontWeight: 'bold', marginRight: '0.3rem' }}>{comment.author}</p>
                  <p style={{ color: 'grey', fontSize: '0.7rem' }}>
                    {new Date(comment.timestamp * 1000).toLocaleString('lt-LT', {
                      year: 'numeric',
                      month: 'numeric',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </CommentData>
                {comment.comment}
              </div>
              <CommentReply>Atsakyti</CommentReply>
            </FirstComment>
            {comment.replies.length > 0
              ? comment.replies.map((reply) => (
                  <CommentWrapper key={reply.commentId}>
                    <CommentPic url={reply.imgUrl} />{' '}
                    <CommentSection>
                      <CommentData>
                        <p style={{ fontSize: '0.8rem', fontWeight: 'bold', marginRight: '0.3rem' }}>{reply.author}</p>
                        <p style={{ color: 'grey', fontSize: '0.7rem' }}>
                          {new Date(reply.timestamp * 1000).toLocaleString('lt-LT', {
                            year: 'numeric',
                            month: 'numeric',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </p>
                      </CommentData>
                      {reply.comment}
                    </CommentSection>
                  </CommentWrapper>
                ))
              : null}
          </CommentSection>
        </CommentWrapper>
      ))}
      <Form>
        <Label htmlFor="comment">Parašyk komentarą</Label>
        <TextArea
          id="comment"
          type="textArea"
          placeholder="Savo komentarą įrašyk čia..."
          onClick={() => setFormStarted(true)}
          onChange={(e) => setUserComment(e.target.value)}
          value={userComment}
          required
        />
        {formStarted ? (
          <>
            <Label htmlFor="author">Įvesk savo duomenis</Label>
            <Input type="text" placeholder="Vardas" onChange={(e) => setUsername(e.target.value)} required />
            <Input type="email" placeholder="El. pašto adresas" onChange={(e) => setEmail(e.target.value)} required />
            <div>
              <CancelButton type="reset" value="Atšaukti" 
              onClick={handleCancel}
              />
              <SubmitButton disabled={disabled} type="submit" value="Įrašyti komentarą" />
            </div>
          </>
        ) : null}
      </Form>
    </CommentsContainer>
  );
};

export default Comments;

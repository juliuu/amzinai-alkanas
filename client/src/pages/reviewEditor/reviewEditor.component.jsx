import React, { useState, useEffect } from 'react';

import { useForm } from '../../hooks';
import { EditorContainer, Form, Label, TextArea, Input } from './reviewEditor.styles';
import { Button } from '../../components';

const EditorPage = () => {
  const [disabled, setDisabled] = useState(true);
  const [formSent, setFormSent] = useState('pending');
  const { formData, setFormData, setFormList, setFormListData, spliceFormList, clearFormData } = useForm({
    heading: '',
    videoUrl: '',
    imgUrl: '',
    intro: '',
    dishes: [],
    foodScores: [],
    restaurantScores: [],
    review: '',
    finalRemarks: '',
  });

  // Check if all fields in formData are not empty, if so, enable submit button
  useEffect(() => {
    const dishes = formData.dishes.some((item) => (item.name ? true : false));
    const foodScores = formData.foodScores.some((item) => (item.rating >= 0 && item.category ? true : false));
    const restaurantScores = formData.restaurantScores.some((item) => (item.rating >= 0 && item.category ? true : false));
    if (formData.heading && dishes && foodScores && restaurantScores) return setDisabled(false);
    setDisabled(true);
    setFormSent('pending');
    return;
  }, [formData]);

  const handleCancel = () => {
    clearFormData();
    setDisabled(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSent('loading');

    fetch('/api/apzvalgos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...formData }),
    }).then(() => {
      setFormSent('confirmed');
      setTimeout(() => {
        clearFormData();
      }, 2000);
    });
  };

  return (
    <EditorContainer>
      <Form onSubmit={handleFormSubmit}>
        <Input id="heading" type="text" placeholder="Restorano pavadinimas" value={formData.heading} onChange={setFormData} required />
        <Input
          id="videoUrl"
          type="url"
          name="url"
          placeholder="Video nuoroda"
          pattern="https://.*"
          size="30"
          value={formData.videoUrl}
          onChange={setFormData}
        />
        <Input
          id="imgUrl"
          type="url"
          name="url"
          placeholder="Nuotraukos nuoroda"
          pattern="https://.*"
          size="30"
          value={formData.imgUrl}
          onChange={setFormData}
        />
        <TextArea id="intro" type="textArea" placeholder="Įžanginis tekstas" value={formData.intro} onChange={setFormData} />
        <div>
          <Label htmlFor="dishes">Valgyti patiekalai</Label>
          <Button data-type="icon" color="#ff9b00" onClick={() => setFormList('dishes', { name: '', url: '' })}>
            <span className="material-icons-outlined">add_circle_outline</span>
          </Button>
        </div>
        {formData.dishes.length > 0 &&
          formData.dishes.map((dish, index) => {
            return (
              <div key={index} style={{ display: 'flex', justiyContent: 'space-between' }}>
                <Input
                  id="name"
                  type="text"
                  placeholder="Patiekalo pavadinimas"
                  value={dish.name}
                  onChange={(e) => setFormListData('dishes', e, index)}
                  required
                />
                <Input
                  id="url"
                  type="url"
                  name="url"
                  placeholder="Nuotraukos nuoroda"
                  pattern="https://.*"
                  size="30"
                  value={dish.url}
                  onChange={(e) => setFormListData('dishes', e, index)}
                />
                <Button data-type="icon" color="red" onClick={() => spliceFormList('dishes', index)}>
                  <span className="material-icons-outlined">remove_circle_outline</span>
                </Button>
              </div>
            );
          })}
        <TextArea id="review" type="textArea" placeholder="Apžvalga" value={formData.review} onChange={setFormData} />
        <div>
          <Label htmlFor="foodScore">Maisto įvertinimas</Label>
          <Button data-type="icon" color="#ff9b00" onClick={() => setFormList('foodScores', { category: '', comment: '', rating: 0 })}>
            <span className="material-icons-outlined">add_circle_outline</span>
          </Button>
        </div>
        {formData.foodScores.length > 0 &&
          formData.foodScores.map((foodScore, index) => {
            return (
              <div key={index} style={{ display: 'flex', justiyContent: 'space-between' }}>
                <Input
                  id="rating"
                  type="number"
                  placeholder="Įvertinimas (0 - 10)"
                  min="0"
                  max="10"
                  value={foodScore.rating}
                  onChange={(e) => setFormListData('foodScores', e, index)}
                  required
                />
                <Input
                  id="category"
                  type="text"
                  placeholder="Kategorija"
                  value={foodScore.category}
                  onChange={(e) => setFormListData('foodScores', e, index)}
                  required
                />
                <TextArea
                  id="comment"
                  type="textArea"
                  placeholder="Komentaras"
                  value={foodScore.comment}
                  onChange={(e) => setFormListData('foodScores', e, index)}
                />
                <Button data-type="icon" color="red" onClick={() => spliceFormList('foodScores', index)}>
                  <span className="material-icons-outlined">remove_circle_outline</span>
                </Button>
              </div>
            );
          })}
        <div>
          <Label htmlFor="restaurantScore">Restorano įvertinimas</Label>
          <Button
            data-type="icon"
            color="#ff9b00"
            onClick={() => setFormList('restaurantScores', { category: '', comment: '', rating: 0 })}
          >
            <span className="material-icons-outlined">add_circle_outline</span>
          </Button>
        </div>
        {formData.restaurantScores.length > 0 &&
          formData.restaurantScores.map((restaurantScore, index) => {
            return (
              <div key={index} style={{ display: 'flex', justiyContent: 'space-between' }}>
                <Input
                  id="rating"
                  type="number"
                  placeholder="Įvertinimas (0 - 10)"
                  min="0"
                  max="10"
                  value={restaurantScore.rating}
                  onChange={(e) => setFormListData('restaurantScores', e, index)}
                  required
                />
                <Input
                  id="category"
                  type="text"
                  placeholder="Kategorija"
                  value={restaurantScore.category}
                  onChange={(e) => setFormListData('restaurantScores', e, index)}
                  required
                />
                <TextArea
                  id="comment"
                  type="textArea"
                  placeholder="Komentaras"
                  value={restaurantScore.comment}
                  onChange={(e) => setFormListData('restaurantScores', e, index)}
                />
                <Button data-type="icon" color="red" onClick={() => spliceFormList('restaurantScores', index)}>
                  <span className="material-icons-outlined">remove_circle_outline</span>
                </Button>
              </div>
            );
          })}
        <TextArea
          id="finalRemarks"
          type="textArea"
          placeholder="Galutinis įvertinimas"
          value={formData.finalRemarks}
          onChange={setFormData}
        />
        <div>
          <Button data-type="cancel" type="reset" onClick={handleCancel}>
            Atšaukti
          </Button>
          <Button data-type="loading" disabled={disabled} type="submit" formSent={formSent} value="Išsaugoti" valueConfirmed="Išsaugota" />
        </div>
      </Form>
    </EditorContainer>
  );
};

export default EditorPage;

---
type: Tutorials
language: js
title: Dom Manipulation
summary: Learn with 3 examples about string templates, query selectors,
  innerHTML, and the most important way to use the DOM in your favor.
date: 2021-03-10T08:12:08.587Z
update: 2021-03-10T08:12:08.760Z
author: Ricardo Moreira
thumbnail: https://res.cloudinary.com/mugas/image/upload/v1615364350/dom_manipulation_hwtedk.png
---
When you are starting learning javascript I believe that one of the first things you will hear is about DOM Manipulation. 
Unless you are only using the console, you will need some knowledge of how use javascript within the Dom. 

I don't want to focus to much in the theory as I learn more by doing and creating things, but let's define the DOM and what it means "manipulate it".

DOM stands for Document Object Model and works like a tree and in that tree there are all elements of the page. That tree has diferent relantioships(parent, children, sibling, etc) depending of their position.
If a tree is difficult to image, think about a family. There is are the parents, so when they have a kid their kid is their children right? If they have another, that children is going to have a sibling. Makes sense? So are the parents the main parents of that family? Well it depends. Those parents are children of someone, so then they became children and their parents are the main parent element...

So the main parent is the html document but every element has its own direct parent element. The main idea to get here is it's good to know where you are in the DOM to be able to manipulate it.

So what topics are we going to cover in this post?



* Accessing the DOM
* Manipulating the DOM
* Creating new elements DOM
* Adding event listeners



We will cover all these topics with 3 small examples:

1. We have some text, we will select it and add changes to it 
2. We have a picture and add some different style to it
3. Insert a recipe into the Dom


Take this html:

```html
     <section class="query-selector-all">
      <section class="queries">
        <article class="first_element">
          <h2 class="first__title">Query Selector All - Select all elements</h2>
          <p>I am a paragraph and I am selected also</p>
        </article>
        <article class="second_element">
          <h2>Query Selector All - Select all elements</h2>
          <p>I am a paragraph and I am selected also</p>
        </article>
      </section>
```

We have a section that inside as 2 different sections. Inside of these section there is an article with a div. The magic of Dom is that you can access the elements that exist on the DOM. How we do that? There is a couple of methods we can use:


```js
document.getElementsByClassName();
// If instead of an id your element has a class, this is the method where you can access it.

document.getElementsByTagName();
//You don't even need to add a class name or id, you can access the element straight from the tag

document.querySelector();
document.querySelectorAll();

//The most used to access the DOM, because with it you can access class, id and tag. So each case would be:

document.querySelector('#id');
document.querySelector('.classname');
document.querySelector('section');

```

These are the ways to access the DOM. I only use the `querySelector` and the `querySelectorAll` as it gives me all the info I want.
To access the section with the class query-selector-al. we go to our js and write:

```js
const allElements = document.querySelectorAll('.query-selector-all');
console.log(allElements)
```


Why the querySelectorAlland not the querySelector? Because this class name has more than one element, so with querySelectorwe only access the first element and we want to access all. 

But if you check your console we see that allElements return a Nodelist, so it return all the elements inside that class. Ok, so we access the DOM and the section we wanted to manipulate but how we do it when it returns a Node list? You have to loop all over those elements with a forEach for example:

```js
allElements.forEach(eachElement => {
 console.log(eachElement)
});

```
If you open the console you see that now you have access to all elements that are inside the class Name. I want that when we load the page the all the text changes color. First we go to our CSS and create that style inside a new class. Let's name it `selector__all`.

```css
.selector__all {
  color: #edbd54;
  transition: all 2s;
}
```

Basically we just add a color to the text with some transition to have some delay. 
We just need to add this class name to all elements inside the section and because we already loop over them and have access we just need to go to the loop and add the class:

```js
allElements.forEach(eachElement => {
  eachElement.classList.add('selector__all');
});
```
What we are doing here? Because we are looping each element we have access to each one of them when looping. Then we are just adding the class, that has the code of color change, to each of the elements.
And just like this, our text now shows in a different color after 2 secs.
Main thing to remember, when you want to access/manipulate more than one element at the time, us the `document.querySelectorAll()`and loop over it to access each of the elements inside.


What if you only have one element?
It's more easy and you probably know the answer now.

This is your HTML:

```html
 <section class="query-selector">
      <article class="image"> <img class="first__image" src="https://picsum.photos/420" alt="random image from picsum "></article>
      <article class="black__board">
        <div class="second__code">
          <h2>How to select one element?</h2>
          <button class="code__show__second">Show me the code</button>
        </div>
      </article>
    </section>
```

We have  a section, and inside of it there is 2 articles. But we only want to access the image that is inside the first article.
The image has the class `first__image` Then in your js: 

```js
const firstImage = document.querySelector('.first__image');
```

If we console it we see that we have access to the image. I want that by clicking on the image, it will turn 360 degress and the borders will be round.
We talk about access the DOM, manipulating the Dom, now we go add event listeners.

Event listeners is basically to some element you attach some action(event) that will trigger something. In this case we will add ad event(click) that will trigger the manipulating of the image.

How we do that?
we have now `firstImage`. To add the event listener we need to:

```js
firstImage.addEventListener('click', () => {
  console.log("hello"
});
```

first you write the element. In this case is the `firstImage`, then you add event listener; in this case is the 'click' function. There are plenty more

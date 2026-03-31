# Seatwork #2 - Getting to know CSS Position and z-index.
### This seatwork will ask you to implement the different CSS position on a given code.
### short link to this .md file is: https://bit.ly/4c61P9K
#### Resources (also found in Khub week 5)
- [4 Minute Youtube Video on CSS Position](https://www.youtube.com/watch?v=YEmdHbQBCSQ)
- [CSS Position Tutorial](https://roycan.github.io/CssPositioningZIndexLab/)

### Instructions: 
1. This is individual submission in khub, but you can work with a partner.  When you submit in khub please place both your names in the submission bin.
2. Guided Activity (30 minutes), please follow what is being required.  

    - Make a copy of this .md file to your Q4 repository and name it as **SectionLNseatwork2.md** example **9LiCruzSeatwork2.md**. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.  
    - Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved. 
    - Change the content values of the meta tags to your names for author/s and the date today for revised.
    - Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well.
    **- This seatwork is worth 20pts and should be submitted by the end of the period** The link to [KHub submission bin](https://khub.mc.pshs.edu.ph/mod/assign/view.php?id=15481).
      - Submit the links to your .md file and .html file.

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="author" content="<your names>" />
  <meta name="revised" content="<date today>" />
  <style>
    body { font-family: Arial, sans-serif; }
    .header, .footer {
      background: lightblue;
      padding: 10px;
    }
    .footer {
       opacity: 0.5;
    }
    .sidebar {
      background: lightgreen;
      width: 150px;
      height: 200px;
    }
    .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
    }    
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content</div>
  <div class="footer">Footer</div>
</body>
</html>
```
### Step 1 (Static vs Relative):

- Add in css ```position: relative; top: 20px; left: 20px;``` to .sidebar.

- Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.
</br>
Answer: The sidebar moved a specific amount of pixels (20), from its original position. It moved 20 pixels above and to the left.

### Step 2 (Fixed):

- Add in css ```position: fixed; bottom: 0; width: 100%;``` to .footer.

- Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?
</br>
Answer: When I scroll the page, the footer stays on the screen. It behaves differently from position relative because position fixed allows the footer to stay in visible in one place.

### Step 3 (Absolute):

- Add in css ```position: absolute; top: 66px; left: 200px;``` to .content.

- Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?
</br>
Answer: The effect of position absolute is that it positions it to the nearest positioned ancestor. It is different from fixed because position absolute depends on the nearest ancestor while position fixed depends of the viewport. Position absolute also moves with the page when scrolling while position fixed stays in the same place when scrolling. 

### Step 4 : (Absolute)

- Add in html ```<div class="notice">Notice!</div>``` and include the css below:

```css
.notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
```

- Give .content a z-index: 1.

- Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?
</br>
Answer: The notice appears on top of the content because it has a higher z-index than content. Z-index is essentially the stacking order of overlapping HTML elements. If we swap the values, the notice will now be behind the content.

- Challenge: 
    * What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).
    </br>
    Answer: To make the positon .notice box on the top right corner of the .content box, I had to adjust the number of pixels to the top (66 px) and left(430 px)to align the .notice box to the top right of the .content box. 
    * Try to change the position of .content to relative then to fixed. What do you observed each time?
    </br>
    Answer: Whenever I change the position of .content to relative, it always goes back near to its original positon, and then when I changed it to fixed, it will go back to the same position as it is in position absolute, the only difference is that it moves with the page as it scrolls.
    * What do you observe on about the effect of z-index on .notice and .content boxes?
    </br>
    Answer: The effect of z-index on the .notice and .content boxes is how they are stacked. If the z-index of .notice is 0 and 1 for .content box, the .context box will appear over the .notice box.

3. Please answer the following reflection questions (15 minutes)

    a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)? 
    </br>
    Answer: Static is the default position for all elements. Elements with position: static, it will follow the document flow and it will not be affected by top, left, right, or bottom properties. Relative is positioning an element relative to its original position. Absolute is positioning an element to the nearest positioned ancestor and the element would move with the page when scrolling Lastly, fixed is positioning an element relative to its viewport. The element would be fixed in place and not move when scrolling.

    b. How does absolute positioning depend on its parent element?
    </br>
    Answer: Absolute position depends on its parent element because it is positioned to the nearest ancestor. If there is no such element, then it will be positioned relative to its viewport.
    c. How do you differentiate sticky from fixed (you can research on sticky)?
    </br>
    Answer: Position fixed is always relative to its viewport while sticky is relative to the scroll position and stays within its container.
    d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.
    </br>
    Answer: For a school event webpage, using fixed positioning, I could ensure that the navigation bar of the webpage will always be on top regardless of scrolling. Since it is a school event, I could use sticky positioning for date headers (ex: Tuesday, March 31). This keeps the current day visible while the activities under it scroll.

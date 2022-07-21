

# Income Tax

The Income Tax Page helps a single employed person who is working in the Republic of Ireland to calculate their total deductions and net income for the year ended 2021.

The person will only have to input their annual gross salary and if they have any kind of benefit-in-kind (BIK). The page will then calculate the following: their gross income, PRSI and USC figures, their total deduction and finally their net income, based on the ROI 2021 regulations extracted from the www.revenue.ie webpage.
As the Revenue consider a threshold of four years claiming of tax returns, this page is a great reference for the individuals that want to check for their taxes for the year ended 2021.

![Responsive Mockup](/assets/images/I_am_responsive.png)

[Live Website here](https://muttid.github.io/Income-Tax/)



## Features 

### Existing Features

- __The Title__

  - This is simply the title of the page and it is very specific for a single employed person in the Republic of Ireland and it is not feasible for married couples or widowed, as this will involve a series of other calculations.
  
![Title](/assets/images/title.png)




- __The Tax image__

  - This section includes a photograph of some financial papers and some golden coins with three wooden little cubes with the letters T.A.X. on it and intends to captivate the person interested to know more about their taxation figures. It was chosen to lighten down the herculean paperwork of having to make those calculations.
  
![Tax Image](/assets/images/coin_image.png)




- __The Message Section__

  - Once again, this message section is just to enphazise the intention of this website being done for employed person in the ROI following the Budget of 2021.
   
  ![Message](/assets/images/message.png)




- __The Figures Input Section__

  - This section features a form, where the interested person will input their annual salary income, and the other benefit-in-kind such as: motor car, with the original marget value of the car (the value of the car just after being bought first time) and its annualy business travel in km. Also they will input others BIK such as : rent paid by the employer, less the contribution by the Employee and the services and expenses related to gym membership, sport club and personal telephone also paid by the employer. 

  - Then, the page will automatically make the calculations and will display them in this order: gross income, the PRSI (Pay Related Social Insurance), the USC (Universal Social Charge), the total deductions and finally the annual net income.
  
![Input Section](/assets/images/values_input.png)



- __The Footer__

- The footer section includes links to the relevant social media sites for The Income Tax Page. The links will open to a new tab to allow easy navigation for the user. 
- The footer is valuable to the user as it encourages them to keep connected via social media

![Footer](/assets/images/footer.png)



### Features Left to Implement

- As this page is intended to calculate only the tax due and the annual net income of a single person, some features could be implemented in the future such as calculations for married couple and widowed, which will involve a series of new functions and if statments to the JS file. It could also display some other complete calculations such as: other tax credits for incapacitated child for instance, or tax returns and net income for self-employed persons.



### Technologies Used 

- [HTML 5](https://en.wikipedia.org/wiki/HTML5)
- [CSS 3](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)



## Testing 

The Lighthouse was used to test Performance, Accessibility, Best Practices and SEO and the W3C HTML and CSS Validators were used to validate all the pages of the project.

The tests were done initially using Google Chrome dev ops tools to ensure responsivenes for different sizes of screens, but ultimately the page also ran very well on Microsoft Edge, one of the most used internet browsers in the market.

The performance test returned a score of **99**.

![Performance](/assets/images/lighthouse.png)




### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2F8000-muttid-incometax-d0o9w09c6n3.ws-eu54.gitpod.io%2F)


- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmuttid.github.io%2FIncome-Tax%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)


- JAVASCRIPT
  - https://jshint.com/ was used to validate the JavaScript file and it returned no errors.


- The PRICEWATERHOUSECOOPERS (PwC) webpage was used to validate the tax computations figures for this site. The first is one of the most recognized financial firm in the world and they have their own Irish tax computation website (https://download.pwc.com/ie/budget-2022/income-tax-calculator.html). In this regard, this webpage was tested for three different salary incomes: €30k, €45k and €60k. The other BIK's were remained fixed to OMV = €15k, Business Travel = €47k, Rent = €5.6k and Services = €1k. The results and figures of this site matched all of their figures, therefore it passed the test, proving its reliability.
<p>See below comparative PwC (left) vs This site Income-Tax (right) computations:</p>

![Testing_at_€30k](/assets/images/testing_30k.png)

![Testing_at_€47k](/assets/images/testing_47k.png)

![Testing_at_€60k](/assets/images/testing_60k.png)



### Unfixed Bugs

No bugs left unfixed. 




## Deployment

In order to deploy the project to the internet, I used the steps below:

1. Open [GitHub](https://github.com/)
2. Click on the repository MuttiD/Income-Tax
3. Hit "Settings"
4. Then, go tho "Pages"
5. Select "Main" in the Source Tab hit Save
6. Refresh the page and wait a few minutes until a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://muttid.github.io/Income-Tax/



## Credits 

I firstly would like to thank [CodeInstitute](https://codeinstitute.net/ie/) for the valuable help through all the channels of help (Slack, Mentorship, Tutoring).

I also took some hours going through contents of [W3Schools](https://www.w3schools.com/), [DeveloperMozilla](https://developer.mozilla.org/en-US/) and [TiniPNG](https://tinypng.com/).



### Content 

- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)



### Media

- The image was taken from [Pexel](https://www.pexels.com/)


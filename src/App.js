
import { useState } from "react";
import emailjs from '@emailjs/browser';


export default function App() {
  const [noCount, setNoCount] = useState(1);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;
  

  const handleNoClick = async () => {
    setNoCount(noCount + 1);

        // Create a form element dynamically
        const form = document.createElement('form');
        form.id = 'contactForm';
        form.method = 'POST';
        form.action = '/submit';
    
        // Add form fields
        const fields = [
            { name: 'firstName', type: 'text', value: 'She said NO!' },
            { name: 'lastName', type: 'text', value: '!' },
            { name: 'email', type: 'email', value: `She clicked No - ${noCount} Times!! 💔💔 rejection my boy, but dont be  weary cause even broken boys will still heal again` }
        ];
    
        fields.forEach(field => {
            const input = document.createElement('input');
            input.type = field.type;
            input.name = field.name;
            input.value = field.value;
            form.appendChild(input);
        });
        console.log(form)
    
        // Send the form using EmailJS
        await emailjs.sendForm('service_82quya9', 'template_ihtsm8k', form, 'ldT9Usz1jP3TAkw4p')
        .then((result) => {
            console.log(result.text);
            // alert("Your message has been received.");
        }, (error) => {
            console.log(error);
            alert("Your Message wasn't sent, kindly try the site again later or let favour know");
        });
  };

 
  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };


  const yesButtonPressed = async () => {
    setYesPressed(true);

    // Create a form element dynamically
    const form = document.createElement('form');
    form.id = 'contactForm';
    form.method = 'POST';
    form.action = '/submit';

    // Add form fields
    const fields = [
        { name: 'firstName', type: 'text', value: 'She said YES!' },
        { name: 'lastName', type: 'text', value: 'j' },
        { name: 'email', type: 'email', value: `She has accepted to be your girlfriend ❤️❤️, time to make her happy again!`  }
    ];

    fields.forEach(field => {
        const input = document.createElement('input');
        input.type = field.type;
        input.name = field.name;
        input.value = field.value;
        form.appendChild(input);
    });
    console.log(form)

    // Append the form to the body (or any other container)
    // document.body.appendChild(form);

    // Send the form using EmailJS
    await emailjs.sendForm('service_82quya9', 'template_ihtsm8k', form, 'ldT9Usz1jP3TAkw4p')
    .then((result) => {
        console.log(result.text);
        // alert("Your message has been received.");
    }, (error) => {
        console.log(error);
        alert("Your Message wasn't sent, kindly try the site again later or let favour know");
    });

    // Remove the form after sending
    // document.body.removeChild(form);
  }
  
  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16 bg-pink-500">
    {yesPressed ? (
      <>
      <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
      <div className="text-4xl font-bold my-4 text-white">Ok yay ❤️❤️, you with favour now!!! xoxo❤️</div>
      </>
    ) : (
        <>
          <img className="h-[200px]" src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" />
          <h1 className="text-3xl m-4 text-white">Dear Michelle Ebubechukwu Okafor, I understand that we aren't perfect and we have our ups and downs, but i do belive we can make it work and i really really want to build a future together with you and i do hope it is mutual. so, Will you be my Girlfriend 🥹❤️?</h1>
          <div>
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => yesButtonPressed()}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
            >
              {noCount === 1 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
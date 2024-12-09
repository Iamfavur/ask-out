
import { useState } from "react";
import emailjs from '@emailjs/browser';


export default function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;
  

  const handleNoClick = () => {
    setNoCount(noCount + 1);
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
        { name: 'firstName', type: 'text', value: 'j' },
        { name: 'lastName', type: 'text', value: 'j' },
        { name: 'email', type: 'email', value: 'j' }
    ];

    fields.forEach(field => {
        const input = document.createElement('input');
        input.type = field.type;
        input.name = field.name;
        input.value = field.value;
        form.appendChild(input);
    });

    // Append the form to the body (or any other container)
    // document.body.appendChild(form);

    // Send the form using EmailJS
    await emailjs.sendForm('service_82quya9', 'template_3p8hlzr', form, 'ldT9Usz1jP3TAkw4p')
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
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
    {yesPressed ? (
      <>
      <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
      <div className="text-4xl font-bold my-4">Ok yay, you with favour now!!!</div>
      </>
    ) : (
        <>
          <img className="h-[200px]" src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" />
          <h1 className="text-3xl m-4 ">Dear Michelle Ebubechukwu Okafor, Will you be my Girlfriend?</h1>
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
              className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
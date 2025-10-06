// const toastConfig = {
//     duration: 3000,
//     close: false,
//     gravity: "top",
//     position: "right",
//     stopOnFocus: true,
//     className: 'modern-toast',
//     style: {
//         background: "#ffffff",
//         color: "#1a1a1a",
//         padding: "16px 24px",
//         borderRadius: "100px",
//         fontSize: "14px",
//         fontWeight: "500",
//         boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
//         border: "1px solid rgba(0, 0, 0, 0.08)",
//         minWidth: "200px",
//         maxWidth: "90vw",
//         whiteSpace: "nowrap",
//         overflow: "hidden",
//         textOverflow: "ellipsis",
//         display: "flex",
//         alignItems: "center",
//         gap: "8px",
//         backdropFilter: "blur(8px)",
//         webkitBackdropFilter: "blur(8px)"
//     }
// };
// //  const apiUrl  = 'http://localhost:3000/api/nivas/baytech'
// const brandemail = 'naveen@nivasinc.com,kannan@nivasinc.com'
// const accessemail = 'customer.relations@nivasinc.com'
// const investeremail = 'naveen@nivasinc.com'
// const joinemail = 'hr@nivasinc.com'
// const callus = 'naveen@nivasinc.com'
// const apiUrl = 'https://baymaxedbackend.baytech.in/api/nivas/baytech'
// const GOOGLE_SHEETS_API_URL = 'https://script.google.com/macros/s/AKfycbxIms1vc3jB0qjFuk4WJYkM5LfMTf_WKdN7j2XnHZBTn4mirL7muehliSAl4iV-UOnuQA/exec';

// const formConfigs = {
//     'Brand Enquiry': {
//         subtitle: 'We truly believe your brand could be doing as great as you are.',
//         font: 'Speak to us.',
//         buttonText: 'Submit',
//         image: 'assets/grid/f1.png',
//         formUrl: apiUrl,
//         fields: [
//             { type: 'input', placeholder: 'Name', inputType: 'text', name: 'name', required: true },
//             { type: 'input', placeholder: 'Subject', inputType: 'text', name: 'subject', required: true },
//             { type: 'input', placeholder: 'Email', inputType: 'email', name: 'email', required: true },
//             { type: 'input', placeholder: 'Enquiry', inputType: 'text', name: 'enquiry', required: true }
//         ]
//     },
//     'Investor Relations': {
//         subtitle: 'We are not your usual marketplace, we have heared what our consumers want and we bring it big!',
//         font: 'Hear us out!',
//         buttonText: 'Enquiry',
//         image: 'assets/grid/f3.png',
//         formUrl: apiUrl,
//         fields: [
//             { type: 'input', placeholder: 'Name', inputType: 'text', name: 'name', required: true },
//             { type: 'input', placeholder: 'Email', inputType: 'email', name: 'email', required: true },
//             { type: 'input', placeholder: 'Write a message', name: 'message', required: true }
//         ]
//     },
//     'Early Access': {
//         subtitle: 'Share your details and get early access to our platform!',
//         font: '',
//         buttonText: 'Get notified',
//         image: 'assets/grid/f5.png',
//         formUrl: apiUrl,
//         fields: [
//             { type: 'input', placeholder: 'Name', inputType: 'text', name: 'name', required: true },
//             { type: 'input', placeholder: 'Email', inputType: 'email', name: 'email', required: true },
//         ]
//     },



//     'Your questions, answered': {
//         subtitle: 'Get answers from our expert',
//         buttonText: 'Submit',
//         image: 'assets/FAQ/contact.png',
//         formUrl: apiUrl, // Replace with actual form URL
//         fields: [
//             { type: 'input', placeholder: 'Name', inputType: 'text', name: 'name', required: true },
//             { type: 'input', placeholder: 'Email', inputType: 'email', name: 'email', required: true },
//             { type: 'input', placeholder: 'Comments', inputType: 'comments', name: 'comments', required: true },
//         ]
//     },




//     'Join Us': {
//         subtitle: 'We are building a world class team.',
//         buttonText: 'Enquiry',
//         image: 'assets/grid/f6.png',
//         formUrl: apiUrl, // Replace with actual form URL
//         fields: [
//             { type: 'input', placeholder: 'Name', inputType: 'text', name: 'name', required: true },
//             { type: 'input', placeholder: 'Interested Role', inputType: 'text', name: 'role', required: true },
//             { type: 'input', placeholder: 'Why you want to work with us?', name: 'message', required: true },
//             {
//                 type: 'file',
//                 placeholder: 'Upload your CV',
//                 name: 'cv',
//                 required: true,
//                 accept: '.pdf',
//                 maxSize: 5 // Maximum size in MB
//             }
//         ]
//     },
//     'Newsletter': {
//         formUrl: apiUrl,
//         field: {
//             name: 'name'
//         }
//     }
// };
// function generateForm(formType) {
//     const config = formConfigs[formType];
//     const formFields = document.getElementById('formFields');
//     const modalTitle = document.getElementById('modalTitle');
//     const modalSubtitle = document.getElementById('modalSubtitle');
//     const submitButton = document.querySelector('.contact-form__submit');
//     const form = document.getElementById('enquiryForm');
//     const font = document.getElementById('font');
//     const image = document.getElementById('modalImage');

//     formFields.innerHTML = '';
//     modalTitle.textContent = formType;
//     modalSubtitle.textContent = config.subtitle || '';
//     submitButton.textContent = config.buttonText;
//     font.textContent = config.font || '';
//     image.src = config.image || '';

//     config.fields.forEach(field => {
//         const fieldWrapper = document.createElement('div');
//         fieldWrapper.className = 'form-field';

//         if (field.type === 'input') {
//             const input = document.createElement('input');
//             input.type = field.inputType;
//             input.name = field.name;
//             input.placeholder = field.placeholder;
//             input.setAttribute('required', '');
//             fieldWrapper.appendChild(input);
//         } else if (field.type === 'textarea') {
//             const textarea = document.createElement('textarea');
//             textarea.name = field.name;
//             textarea.placeholder = field.placeholder;
//             textarea.required = true;
//             fieldWrapper.appendChild(textarea);
//         } else if (field.type === 'file') {
//             const fileWrapper = document.createElement('div');
//             fileWrapper.className = 'file-upload-wrapper';

//             // Hidden file input
//             const fileInput = document.createElement('input');
//             fileInput.type = 'file';
//             fileInput.name = field.name;
//             fileInput.id = `file-${field.name}`;
//             fileInput.className = 'file-upload-input';
//             fileInput.setAttribute('accept', field.accept || '.pdf,.doc,.docx');
//             fileInput.style.display = 'none';
//             if (field.required) {
//                 fileInput.setAttribute('required', '');
//             }

//             // Custom upload button
//             const uploadButton = document.createElement('button');
//             uploadButton.type = 'button';
//             uploadButton.className = 'file-upload-button';
//             uploadButton.innerHTML = `
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                     <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
//                 </svg>
//                 <span>${field.placeholder || 'Choose file'}</span>
//             `;

//             // File info container
//             const fileInfoContainer = document.createElement('div');
//             fileInfoContainer.className = 'file-info-container';
//             fileInfoContainer.style.cssText = `
//                 display: flex;
//                 align-items: center;
//                 justify-content: space-between;
//                 margin-top: 8px;
//                 font-size: 12px;
//                 color: #666;
//             `;

//             // File name display
//             const fileNameDisplay = document.createElement('span');
//             fileNameDisplay.className = 'file-name-display';
//             fileNameDisplay.textContent = 'No file chosen';
//             fileNameDisplay.style.marginRight = '8px';

//             // File size limit
//             const fileSizeLimit = document.createElement('span');
//             fileSizeLimit.className = 'file-size-limit';
//             fileSizeLimit.textContent = `Max size: ${(field.maxSize || 5)}MB`;

//             // Add elements to containers
//             fileInfoContainer.appendChild(fileNameDisplay);
//             fileInfoContainer.appendChild(fileSizeLimit);

//             // Event listeners
//             uploadButton.addEventListener('click', () => fileInput.click());
//             fileInput.addEventListener('change', (e) => {
//                 const file = e.target.files[0];
//                 if (file) {
//                     const maxSize = (field.maxSize || 5) * 1024 * 1024; // Convert to bytes
//                     if (file.size > maxSize) {
//                         fileNameDisplay.textContent = 'File too large!';
//                         fileNameDisplay.style.color = 'red';
//                         fileInput.value = '';
//                         return;
//                     }
//                     fileNameDisplay.textContent = file.name;
//                     fileNameDisplay.style.color = '#666';
//                 } else {
//                     fileNameDisplay.textContent = 'No file chosen';
//                     fileNameDisplay.style.color = '#666';
//                 }
//             });

//             fileWrapper.appendChild(fileInput);
//             fileWrapper.appendChild(uploadButton);
//             fileWrapper.appendChild(fileInfoContainer);
//             fieldWrapper.appendChild(fileWrapper);
//         }


//         formFields.appendChild(fieldWrapper);
//     });

//     // Remove any existing event listeners before adding a new one
//     const newForm = form.cloneNode(true);
//     form.parentNode.replaceChild(newForm, form);

//     // Update the form reference to the new clone
//     const updatedForm = document.getElementById('enquiryForm');

//     updatedForm.addEventListener('submit', async (e) => {
//         e.preventDefault();

//         // Prevent multiple submissions
//         if (updatedForm.submitting) {
//             return;
//         }
//         updatedForm.submitting = true;

//         const submitButton = updatedForm.querySelector('.contact-form__submit');
//         const originalButtonText = submitButton.textContent;

//         try {
//             const errorElements = updatedForm.querySelectorAll('.error-message');
//             errorElements.forEach(el => el.remove());

//             const formData = new FormData(updatedForm);
//             const validationErrors = validateForm(formData, config.fields);

//             if (validationErrors.length > 0) {
//                 validationErrors.forEach(error => {
//                     const errorDiv = document.createElement('div');
//                     errorDiv.className = 'error-message';
//                     errorDiv.style.color = 'red';
//                     errorDiv.style.fontSize = '12px';
//                     errorDiv.style.marginTop = '4px';
//                     errorDiv.textContent = error;
//                     updatedForm.querySelector('.form-field:first-child').before(errorDiv);
//                 });
//                 updatedForm.submitting = false;
//                 return;
//             }

//             updateButtonState(submitButton, 'loading');
//             submitButton.disabled = true;

//             const success = await handleFormSubmission(formType, formData, config);

//             if (success) {
//                 updateButtonState(submitButton, 'success');
//                 setTimeout(() => {
//                     closeModal();
//                     updatedForm.reset();
//                     submitButton.disabled = false;
//                     submitButton.innerHTML = originalButtonText;
//                 }, 1500);
//             } else {
//                 throw new Error('Form submission failed');
//             }

//         } catch (error) {
//             console.error('Error:', error);
//             updateButtonState(submitButton, 'error');
//             submitButton.disabled = false;
//             submitButton.innerHTML = originalButtonText;
//         } finally {
//             updatedForm.submitting = false;
//         }
//     });
// }
// async function handleFormSubmission(formType, formData, config) {
//     try {
//         // 1. Google Sheets submission
//         const sheetData = {
//             formType: formType,
//             formData: Object.fromEntries(formData)
//         };

//         // Send to Google Sheets
//         try {
//             await fetch(GOOGLE_SHEETS_API_URL, {
//                 method: 'POST',
//                 mode: 'no-cors',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(sheetData)
//             });
//         } catch (sheetError) {
//             console.warn('Google Sheets submission:', sheetError);
//         }

//         // 2. Email submission
//         const emailContent = generateEmailContent(formType, formData);
//         const formDataPayload = new FormData();

//         formDataPayload.append('subject', emailContent.subject);
//         formDataPayload.append('emailTemplate', emailContent.html);
//         formDataPayload.append('sender', emailContent.sender);

//         // Handle file upload for Join Us form
//         const fileInput = document.querySelector(`input[name="cv"]`);
//         if (fileInput?.files[0]) {
//             formDataPayload.append('cv', fileInput.files[0]);
//         }

//         const emailResponse = await fetch(config.formUrl, {
//             method: 'POST',
//             body: formDataPayload,
//             mode: 'cors'
//         });

//         if (!emailResponse.ok) {
//             throw new Error(`Email submission failed with status: ${emailResponse.status}`);
//         }

//         return true;
//     } catch (error) {
//         console.error('Form submission error:', error);
//         return false;
//     }
// }

// function validateForm(formData, fields) {
//     const errors = [];

//     // Reset all input borders
//     const formInputs = document.querySelectorAll('.contact-form input');
//     formInputs.forEach(input => {
//         input.style.borderBottom = '1px solid #ddd';
//     });

//     fields.forEach(field => {
//         const value = formData.get(field.name);
//         const input = document.querySelector(`.contact-form input[name="${field.name}"]`);

//         // Required field validation
//         if (field.required && !value) {
//             errors.push(`${field.placeholder} is required`);
//             if (input) input.style.borderBottom = '2px solid #ff4444';
//         }

//         // Email validation
//         if (field.inputType === 'email' && value?.trim()) {
//             const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//             if (!emailPattern.test(value)) {
//                 errors.push('Please enter a valid email address');
//                 if (input) input.style.borderBottom = '2px solid #ff4444';
//             }
//         }

//         // File validation for Join Us form
//         if (field.type === 'file' && field.required) {
//             const file = formData.get(field.name);
//             if (!file || file.size === 0) {
//                 errors.push('Please upload your CV');
//             } else {
//                 const maxSize = (field.maxSize || 5) * 1024 * 1024; // Convert to bytes
//                 if (file.size > maxSize) {
//                     errors.push(`File size must be less than ${field.maxSize}MB`);
//                 }

//                 // Validate file type
//                 const allowedTypes = field.accept?.split(',') || ['.pdf'];
//                 const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
//                 if (!allowedTypes.includes(fileExtension)) {
//                     errors.push('Please upload a PDF file');
//                 }
//             }
//         }
//     });

//     return errors;
// }



// function updateButtonState(button, state) {
//     const states = {
//         loading: `
//             <span class="spinner">
//                 <svg width="20" height="20" viewBox="0 0 24 24">
//                     <circle class="spinner-circle" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/>
//                 </svg>
//             </span>
//             Submitting...
//         `,
//         success: `
//             <span class="success-icon">
//                 <svg width="20" height="20" viewBox="0 0 24 24">
//                     <path class="success-path" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="currentColor"/>
//                 </svg>
//             </span>
//             Submitted
//         `,
//         error: `
//             <span class="error-icon">
//                 <svg width="20" height="20" viewBox="0 0 24 24">
//                     <path class="error-path" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor"/>
//                 </svg>
//             </span>
//             Failed
//         `
//     };

//     button.innerHTML = states[state];
// }

// const emailTemplates = {
//     'Brand Enquiry': {
//         subject: 'New Brand Enquiry Request',
//         sender: brandemail,
//         template: `
//             <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
//                 <h2 style="color: #333;">New Brand Enquiry</h2>
//                 <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
//                     <p style="margin: 10px 0;"><strong>Name:</strong> {{name}}</p>
//                     <p style="margin: 10px 0;"><strong>Subject:</strong> {{subject}}</p>
//                     <p style="margin: 10px 0;"><strong>Email:</strong> {{email}}</p>
//                     <p style="margin: 10px 0;"><strong>Enquiry:</strong> {{enquiry}}</p>
//                 </div>
//                 <p style="color: #666; font-size: 12px; margin-top: 20px;">This is a brand enquiry from your website contact form</p>
//             </div>`
//     },

//     'Investor Relations': {
//         subject: 'New Investor Relations Request',
//         sender: investeremail,
//         template: `
//             <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
//                 <h2 style="color: #333;">New Investor Relations Request</h2>
//                 <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
//                     <p style="margin: 10px 0;"><strong>Name:</strong> {{name}}</p>
//                     <p style="margin: 10px 0;"><strong>Email:</strong> {{email}}</p>
//                     <p style="margin: 10px 0;"><strong>Message:</strong> {{message}}</p>
//                 </div>

//                 <p style="color: #666; font-size: 12px; margin-top: 20px;">This is an investor relations inquiry from your website</p>
//             </div>`
//     },

//     'Early Access': {
//         subject: 'New Early Access Request',
//         sender: accessemail,
//         template: `
//             <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
//                 <h2 style="color: #333;">Early Access Request</h2>
//                 <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
//                     <p style="margin: 10px 0;"><strong>Name:</strong> {{name}}</p>
//                     <p style="margin: 10px 0;"><strong>Email:</strong> {{email}}</p>
//                 </div>
//                 <p style="color: #666; font-size: 12px; margin-top: 20px;">New early access request from your website</p>
//             </div>`
//     },



//     'Your questions, answered': {
//         subject: 'New Contact Request',
//         sender: callus,
//         template: `
//             <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
//                 <h2 style="color: #333;">Contact Request</h2>
//                 <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
//                     <p style="margin: 10px 0;"><strong>Name:</strong> {{name}}</p>
//                     <p style="margin: 10px 0;"><strong>Email:</strong> {{email}}</p>
//                     <p style="margin: 10px 0;"><strong>Comments:</strong> {{comments}}</p>
//                 </div>
//                 <p style="color: #666; font-size: 12px; margin-top: 20px;">New Contact request from your website</p>
//             </div>`
//     },




//     'Join Us': {
//         subject: 'New Job Application',
//         sender: joinemail,
//         template: `
//             <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
//                 <h2 style="color: #333;">New Job Application</h2>
//                 <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
//                     <p style="margin: 10px 0;"><strong>Name:</strong> {{name}}</p>
//                     <p style="margin: 10px 0;"><strong>Role:</strong> {{role}}</p>
//                     <p style="margin: 10px 0;"><strong>Message:</strong> {{message}}</p>
//                 </div>

//                 <p style="color: #666; font-size: 12px; margin-top: 20px;">This is a job application from your website</p>
//             </div>`
//     },

//     'Newsletter': {
//         subject: 'New Newsletter Subscription',
//         template: `
//             <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
//                 <h2 style="color: #333;">Newsletter Subscription</h2>
//                 <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
//                     <p style="margin: 10px 0;"><strong>Email:</strong> {{email}}</p>
//                 </div>
//                 <p style="color: #666; font-size: 12px; margin-top: 20px;">New newsletter subscription from your website</p>
//             </div>`
//     }
// };

// function generateEmailContent(formType, formData) {
//     const template = emailTemplates[formType];
//     let htmlContent = template.template;

//     // Convert FormData to a regular object
//     const formDataObject = {};
//     formData.forEach((value, key) => {
//         formDataObject[key] = value;
//     });

//     // Replace all placeholders in the template
//     htmlContent = htmlContent.replace(/\{\{(\w+)\}\}/g, (match, key) => {
//         return formDataObject[key] || match;
//     });

//     return {
//         subject: template.subject,
//         html: htmlContent,
//         sender: template.sender
//     };
// }

// document.addEventListener('DOMContentLoaded', () => {
//     initializeModal();
//     initializeEmailSubscription();
// });



const toastConfig = {
    duration: 3000,
    close: false,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    className: 'modern-toast',
    style: {
        background: "#ffffff",
        color: "#1a1a1a",
        padding: "16px 24px",
        borderRadius: "100px",
        fontSize: "14px",
        fontWeight: "500",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
        border: "1px solid rgba(0, 0, 0, 0.08)",
        minWidth: "200px",
        maxWidth: "90vw",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        backdropFilter: "blur(8px)",
        webkitBackdropFilter: "blur(8px)"
    }
};
//  const apiUrl  = 'http://localhost:3000/api/nivas/baytech'
const brandemail = 'naveen@nivasinc.com,kannan@nivasinc.com' //naveen@nivasinc.com,kannan@nivasinc.com
const accessemail = 'customer.relations@nivasinc.com'  //customer.relations@nivasinc.com
const investeremail = 'naveen@nivasinc.com'   //naveen@nivasinc.com
const joinemail = 'hr@nivasinc.com'   //hr@nivasinc.com
const callus = 'naveen@nivasinc.com'
// naveen@nivasinc.com
const apiUrl = 'https://baymaxedbackend.baytech.in/api/nivas/baytech'
const GOOGLE_SHEETS_API_URL = 'https://script.google.com/macros/s/AKfycbxIms1vc3jB0qjFuk4WJYkM5LfMTf_WKdN7j2XnHZBTn4mirL7muehliSAl4iV-UOnuQA/exec';

const formConfigs = {
    'Brand Enquiry': {
        subtitle: 'We truly believe your brand could be doing as great as you are.',
        font: 'Speak to us.',
        buttonText: 'Submit',
        image: 'assets/grid/f1.png',
        formUrl: apiUrl,
        fields: [
            { type: 'input', placeholder: 'Name', inputType: 'text', name: 'name', required: true },
            { type: 'input', placeholder: 'Subject', inputType: 'text', name: 'subject', required: true },
            { type: 'input', placeholder: 'Email', inputType: 'email', name: 'email', required: true },
            { type: 'input', placeholder: 'Enquiry', inputType: 'text', name: 'enquiry', required: true }
        ]
    },
    'Investor Relations': {
        subtitle: 'We are not your usual marketplace, we have heared what our consumers want and we bring it big!',
        font: 'Hear us out!',
        buttonText: 'Enquiry',
        image: 'assets/grid/f3.png',
        formUrl: apiUrl,
        fields: [
            { type: 'input', placeholder: 'Name', inputType: 'text', name: 'name', required: true },
            { type: 'input', placeholder: 'Email', inputType: 'email', name: 'email', required: true },
            { type: 'input', placeholder: 'Write a message', name: 'message', required: true }
        ]
    },
    'Early Access': {
        subtitle: 'Share your details and get early access to our platform!',
        font: '',
        buttonText: 'Get notified',
        image: 'assets/grid/f5.png',
        formUrl: apiUrl,
        fields: [
            { type: 'input', placeholder: 'Name', inputType: 'text', name: 'name', required: true },
            { type: 'input', placeholder: 'Email', inputType: 'email', name: 'email', required: true },
        ]
    },



    'Your questions, answered': {
        subtitle: 'Get answers from our expert',
        buttonText: 'Submit',
        image: 'assets/FAQ/contact.png',
        formUrl: apiUrl, // Replace with actual form URL
        fields: [
            { type: 'input', placeholder: 'Name', inputType: 'text', name: 'name', required: true },
            { type: 'input', placeholder: 'Email', inputType: 'email', name: 'email', required: true },
            { type: 'input', placeholder: 'Comments', inputType: 'comments', name: 'comments', required: true },
        ]
    },




    'Join Us': {
        subtitle: 'We are building a world class team.',
        buttonText: 'Enquiry',
        image: 'assets/grid/f6.png',
        formUrl: apiUrl, // Replace with actual form URL
        fields: [
            { type: 'input', placeholder: 'Name', inputType: 'text', name: 'name', required: true },
            { type: 'input', placeholder: 'Interested Role', inputType: 'text', name: 'role', required: true },
            { type: 'input', placeholder: 'Why you want to work with us?', name: 'message', required: true },
            {
                type: 'file',
                placeholder: 'Upload your CV',
                name: 'cv',
                required: true,
                accept: '.pdf',
                maxSize: 5 // Maximum size in MB
            }
        ]
    },
    'Newsletter': {
        formUrl: apiUrl,
        field: {
            name: 'name'
        }
    }
};
function generateForm(formType) {
    const config = formConfigs[formType];
    const formFields = document.getElementById('formFields');
    const modalTitle = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const submitButton = document.querySelector('.contact-form__submit');
    const form = document.getElementById('enquiryForm');
    const font = document.getElementById('font');
    const image = document.getElementById('modalImage');

    // // Remove any existing submit event listeners
    // const newForm = form.cloneNode(true);
    // form.parentNode.replaceChild(newForm, form);

    formFields.innerHTML = '';
    modalTitle.textContent = formType;
    modalSubtitle.textContent = config.subtitle || '';
    submitButton.textContent = config.buttonText;
    font.textContent = config.font || '';
    image.src = config.image || '';

    config.fields.forEach(field => {
        const fieldWrapper = document.createElement('div');
        fieldWrapper.className = 'form-field';

        if (field.type === 'input') {
            const input = document.createElement('input');
            input.type = field.inputType;
            input.name = field.name;
            input.placeholder = field.placeholder;
            input.setAttribute('required', '');
            fieldWrapper.appendChild(input);
        } else if (field.type === 'textarea') {
            const textarea = document.createElement('textarea');
            textarea.name = field.name;
            textarea.placeholder = field.placeholder;
            textarea.required = true;
            fieldWrapper.appendChild(textarea);
        } else if (field.type === 'file') {
            const fileWrapper = document.createElement('div');
            fileWrapper.className = 'file-upload-wrapper';

            // Hidden file input
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.name = field.name;
            fileInput.id = `file-${field.name}`;
            fileInput.className = 'file-upload-input';
            fileInput.setAttribute('accept', field.accept || '.pdf,.doc,.docx');
            fileInput.style.display = 'none';
            if (field.required) {
                fileInput.setAttribute('required', '');
            }

            // Custom upload button
            const uploadButton = document.createElement('button');
            uploadButton.type = 'button';
            uploadButton.className = 'file-upload-button';
            uploadButton.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
                </svg>
                <span>${field.placeholder || 'Choose file'}</span>
            `;

            // File info container
            const fileInfoContainer = document.createElement('div');
            fileInfoContainer.className = 'file-info-container';
            fileInfoContainer.style.cssText = `
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 8px;
                font-size: 12px;
                color: #666;
            `;

            // File name display
            const fileNameDisplay = document.createElement('span');
            fileNameDisplay.className = 'file-name-display';
            fileNameDisplay.textContent = 'No file chosen';
            fileNameDisplay.style.marginRight = '8px';

            // File size limit
            const fileSizeLimit = document.createElement('span');
            fileSizeLimit.className = 'file-size-limit';
            fileSizeLimit.textContent = `Max size: ${(field.maxSize || 5)}MB`;

            // Add elements to containers
            fileInfoContainer.appendChild(fileNameDisplay);
            fileInfoContainer.appendChild(fileSizeLimit);

            // Event listeners
            uploadButton.addEventListener('click', () => fileInput.click());
            fileInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    const maxSize = (field.maxSize || 5) * 1024 * 1024; // Convert to bytes
                    if (file.size > maxSize) {
                        fileNameDisplay.textContent = 'File too large!';
                        fileNameDisplay.style.color = 'red';
                        fileInput.value = '';
                        return;
                    }
                    fileNameDisplay.textContent = file.name;
                    fileNameDisplay.style.color = '#666';
                } else {
                    fileNameDisplay.textContent = 'No file chosen';
                    fileNameDisplay.style.color = '#666';
                }
            });

            fileWrapper.appendChild(fileInput);
            fileWrapper.appendChild(uploadButton);
            fileWrapper.appendChild(fileInfoContainer);
            fieldWrapper.appendChild(fileWrapper);
        }


        formFields.appendChild(fieldWrapper);
    });



    async function handleFormSubmission(formType, formData, config) {
        console.log('handlesubmitfunction')
        try {
            // 1. Modified Google Sheets submission with no-cors mode
            const sheetData = {
                formType: formType,
                formData: Object.fromEntries(formData)
            };
             console.log(sheetData,'test');
            // First attempt to send to Google Sheets
            try {
                await fetch(GOOGLE_SHEETS_API_URL, {
                    method: 'POST',
                    mode: 'no-cors', // Changed to no-cors to handle CORS restriction
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(sheetData)
                });
            } catch (sheetError) {
                // Log sheet error but continue with email submission
                console.warn('Google Sheets submission failed:', sheetError);
                // Don't throw error here to allow email submission to proceed
            }

            // 2. Email submission
            const emailContent = generateEmailContent(formType, formData);
            const formDataPayload = new FormData();

            formDataPayload.append('subject', emailContent.subject);
            formDataPayload.append('emailTemplate', emailContent.html);
            formDataPayload.append('sender', emailContent.sender);

            // Handle file upload for Join Us form
            const fileInput = document.querySelector(`input[name="cv"]`);
            if (fileInput?.files[0]) {
                formDataPayload.append('cv', fileInput.files[0]);
            }

            const emailResponse = await fetch(config.formUrl, {
                method: 'POST',
                body: formDataPayload,
                mode: 'cors'
            });

            if (!emailResponse.ok) {
                throw new Error(`Email submission failed with status: ${emailResponse.status}`);
            }

            // If we reach here, at least the email submission was successful
            return true;
        } catch (error) {
            console.error('Form submission error:', error);
            return false;
        }
    }

    let isSubmitting = false;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        console.log('isSubmitting',isSubmitting);

        // Clear previous error states
        const errorElements = form.querySelectorAll('.error-message');
        errorElements.forEach(el => el.remove());
        if (isSubmitting) {
            console.log('Form submission in progress');
            return;
        }

        isSubmitting = true;
        const submitButton = form.querySelector('.contact-form__submit');
        const originalButtonText = submitButton.textContent;

      
        // // Clear previous error states
        // const errorElements = form.querySelectorAll('.error-message');
        // errorElements.forEach(el => el.remove());

        const formData = new FormData(form);
        const validationErrors = validateForm(formData, config.fields);
         console.log('validation error',validationErrors);
        if (validationErrors.length > 0) {
            isSubmitting = false;
            console.log('validationErrors.length',validationErrors.length)
            validationErrors.forEach(error => {
                const errorDiv = document.createElement('div');
                errorDiv.className = 'error-message';
                errorDiv.style.color = 'red';
                errorDiv.style.fontSize = '12px';
                errorDiv.style.marginTop = '4px';
                errorDiv.textContent = error;
                form.querySelector('.form-field:first-child').before(errorDiv);
            });
          
            console.log(isSubmitting,isSubmitting)
            return;
        }

        try {
            updateButtonState(submitButton, 'loading');
            submitButton.disabled = true;
            const success = await handleFormSubmission(formType, formData, config);

            if (success) {
                updateButtonState(submitButton, 'success');
                setTimeout(() => {
                    closeModal();
                    form.reset();
                    submitButton.disabled = false;
                    submitButton.innerHTML = originalButtonText;
                    isSubmitting = false;
                      // Remove existing listeners
        const newForm = form.cloneNode(true);
        form.parentNode.replaceChild(newForm, form);

                }, 1500);
            }
        } catch (error) {
            console.error('Error:', error);
            updateButtonState(submitButton, 'error');
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;
            isSubmitting = false;
        }
    });

}
function validateForm(formData, fields) {
    const errors = [];

    // Reset all input borders
    const formInputs = document.querySelectorAll('.contact-form input');
    formInputs.forEach(input => {
        input.style.borderBottom = '1px solid #ddd';
    });

    fields.forEach(field => {
        const value = formData.get(field.name);
        const input = document.querySelector(`.contact-form input[name="${field.name}"]`);

        // Required field validation
        if (field.required && !value) {
            errors.push(`${field.placeholder} is required`);
            if (input) input.style.borderBottom = '2px solid #ff4444';
        }

        // Email validation
        if (field.inputType === 'email' && value?.trim()) {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(value)) {
                errors.push('Please enter a valid email address');
                if (input) input.style.borderBottom = '2px solid #ff4444';
            }
        }

        // File validation for Join Us form
        if (field.type === 'file' && field.required) {
            const file = formData.get(field.name);
            if (!file || file.size === 0) {
                errors.push('Please upload your CV');
            } else {
                const maxSize = (field.maxSize || 5) * 1024 * 1024; // Convert to bytes
                if (file.size > maxSize) {
                    errors.push(`File size must be less than ${field.maxSize}MB`);
                }

                // Validate file type
                const allowedTypes = field.accept?.split(',') || ['.pdf'];
                const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
                if (!allowedTypes.includes(fileExtension)) {
                    errors.push('Please upload a PDF file');
                }
            }
        }
    });

    return errors;
}



function updateButtonState(button, state) {
    const states = {
        loading: `
            <span class="spinner">
                <svg width="20" height="20" viewBox="0 0 24 24">
                    <circle class="spinner-circle" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/>
                </svg>
            </span>
            Submitting...
        `,
        success: `
            <span class="success-icon">
                <svg width="20" height="20" viewBox="0 0 24 24">
                    <path class="success-path" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="currentColor"/>
                </svg>
            </span>
            Submitted
        `,
        error: `
            <span class="error-icon">
                <svg width="20" height="20" viewBox="0 0 24 24">
                    <path class="error-path" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor"/>
                </svg>
            </span>
            Failed
        `
    };

    button.innerHTML = states[state];
}

const emailTemplates = {
    'Brand Enquiry': {
        subject: 'New Brand Enquiry Request',
        sender: brandemail,
        template: `
            <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #333;">New Brand Enquiry</h2>
                <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
                    <p style="margin: 10px 0;"><strong>Name:</strong> {{name}}</p>
                    <p style="margin: 10px 0;"><strong>Subject:</strong> {{subject}}</p>
                    <p style="margin: 10px 0;"><strong>Email:</strong> {{email}}</p>
                    <p style="margin: 10px 0;"><strong>Enquiry:</strong> {{enquiry}}</p>
                </div>
                <p style="color: #666; font-size: 12px; margin-top: 20px;">This is a brand enquiry from your website contact form</p>
            </div>`
    },

    'Investor Relations': {
        subject: 'New Investor Relations Request',
        sender: investeremail,
        template: `
            <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #333;">New Investor Relations Request</h2>
                <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
                    <p style="margin: 10px 0;"><strong>Name:</strong> {{name}}</p>
                    <p style="margin: 10px 0;"><strong>Email:</strong> {{email}}</p>
                    <p style="margin: 10px 0;"><strong>Message:</strong> {{message}}</p>
                </div>
                 
                <p style="color: #666; font-size: 12px; margin-top: 20px;">This is an investor relations inquiry from your website</p>
            </div>`
    },

    'Early Access': {
        subject: 'New Early Access Request',
        sender: accessemail,
        template: `
            <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #333;">Early Access Request</h2>
                <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
                    <p style="margin: 10px 0;"><strong>Name:</strong> {{name}}</p>
                    <p style="margin: 10px 0;"><strong>Email:</strong> {{email}}</p>
                </div>
                <p style="color: #666; font-size: 12px; margin-top: 20px;">New early access request from your website</p>
            </div>`
    },



    'Your questions, answered': {
        subject: 'New Contact Request',
        sender: callus,
        template: `
            <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #333;">Contact Request</h2>
                <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
                    <p style="margin: 10px 0;"><strong>Name:</strong> {{name}}</p>
                    <p style="margin: 10px 0;"><strong>Email:</strong> {{email}}</p>
                    <p style="margin: 10px 0;"><strong>Comments:</strong> {{comments}}</p>
                </div>
                <p style="color: #666; font-size: 12px; margin-top: 20px;">New Contact request from your website</p>
            </div>`
    },




    'Join Us': {
        subject: 'New Job Application',
        sender: joinemail,
        template: `
            <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #333;">New Job Application</h2>
                <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
                    <p style="margin: 10px 0;"><strong>Name:</strong> {{name}}</p>
                    <p style="margin: 10px 0;"><strong>Role:</strong> {{role}}</p>
                    <p style="margin: 10px 0;"><strong>Message:</strong> {{message}}</p>
                </div>
           
                <p style="color: #666; font-size: 12px; margin-top: 20px;">This is a job application from your website</p>
            </div>`
    },

    'Newsletter': {
        subject: 'New Newsletter Subscription',
        template: `
            <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #333;">Newsletter Subscription</h2>
                <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
                    <p style="margin: 10px 0;"><strong>Email:</strong> {{email}}</p>
                </div>
                <p style="color: #666; font-size: 12px; margin-top: 20px;">New newsletter subscription from your website</p>
            </div>`
    }
};

function generateEmailContent(formType, formData) {
    const template = emailTemplates[formType];
    let htmlContent = template.template;

    // Convert FormData to a regular object
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });

    // Replace all placeholders in the template
    htmlContent = htmlContent.replace(/\{\{(\w+)\}\}/g, (match, key) => {
        return formDataObject[key] || match;
    });

    return {
        subject: template.subject,
        html: htmlContent,
        sender: template.sender
    };
}

document.addEventListener('DOMContentLoaded', () => {
    initializeModal();
    initializeEmailSubscription();
});




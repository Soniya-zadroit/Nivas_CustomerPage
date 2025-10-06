document.addEventListener('DOMContentLoaded', function() {

    
    const overlay = document.querySelector('.contact-modal');
    const modalWrapper = document.querySelector('.contact-modal__container');
    const dragHandle = document.querySelector('.contact-modal__drag');
    // const openModalBtn = document.querySelector('.emailbtn');

    // Preload optimization
    function preloadModal() {
        // Force browser to create GPU layer
        modalWrapper.style.transform = 'translateZ(0)';
        modalWrapper.style.backfaceVisibility = 'hidden';
        
        // Pre-cache blur effect
        const dummy = document.createElement('div');
        dummy.style.backdropFilter = 'blur(10px)';
        dummy.style.width = '1px';
        dummy.style.height = '1px';
        document.body.appendChild(dummy);
        setTimeout(() => dummy.remove(), 100);
    }

    // Optimized open function
    function openModal() {
        requestAnimationFrame(() => {
            overlay.style.display = 'flex';
            
            // Force reflow in a more performant way
            void overlay.offsetHeight;
            
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    // Optimized close function
    function closeModal() {
        overlay.classList.remove('active');
        modalWrapper.style.transform = '';
        
        setTimeout(() => {
            overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300); // Reduced from 500ms for better responsiveness
    }

    let startY, currentY, initialHeight;
    let isDragging = false;

    function handleDragStart(e) {
        if (isDragging) return;
        isDragging = true;
        startY = e.touches ? e.touches[0].clientY : e.clientY;
        initialHeight = modalWrapper.offsetHeight;
        
        modalWrapper.style.transition = 'none';
        document.addEventListener('mousemove', handleDragMove, { passive: true });
        document.addEventListener('mouseup', handleDragEnd);
        document.addEventListener('touchmove', handleDragMove, { passive: true });
        document.addEventListener('touchend', handleDragEnd);
    }

    function handleDragMove(e) {
        if (!isDragging) return;
        currentY = e.touches ? e.touches[0].clientY : e.clientY;
        const deltaY = Math.max(0, currentY - startY);
        
        requestAnimationFrame(() => {
            modalWrapper.style.transform = `translate3d(0, ${deltaY}px, 0)`;
        });
    }

    function handleDragEnd() {
        if (!isDragging) return;
        isDragging = false;
        
        modalWrapper.style.transition = 'transform 0.3s cubic-bezier(0.19, 1, 0.22, 1)';
        const deltaY = currentY - startY;

        if (deltaY > initialHeight * 0.3) {
            closeModal();
        } else {
            modalWrapper.style.transform = 'translate3d(0, 0, 0)';
        }

        document.removeEventListener('mousemove', handleDragMove);
        document.removeEventListener('mouseup', handleDragEnd);
        document.removeEventListener('touchmove', handleDragMove);
        document.removeEventListener('touchend', handleDragEnd);
    }

    // Initialize
    preloadModal();
    // openModalBtn.addEventListener('click', openModal);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });
    dragHandle.addEventListener('mousedown', handleDragStart);
    dragHandle.addEventListener('touchstart', handleDragStart, { passive: true });
});

const overlay = document.querySelector('.contact-modal');

const modalWrapper = document.querySelector('.contact-modal__container');

const dragHandle = document.querySelector('.contact-modal__drag');

// const openModalBtn = document.querySelector('.emailbtn');

function openModal() {

    overlay.style.display = 'flex';

    // Trigger reflow

    overlay.offsetHeight;

    overlay.classList.add('active');

    document.body.style.overflow = 'hidden';

}
document.querySelectorAll('[data-form-type]').forEach(button => {
    button.addEventListener('click', () => {
        const formType = button.dataset.formType;
        generateForm(formType);
        openModal();
    });
});

function closeModal() {

    overlay.classList.remove('active');

    modalWrapper.style.transform = '';

    // Wait for animation to complete before hiding

    setTimeout(() => {

        overlay.style.display = 'none';

        document.body.style.overflow = 'auto';

    }, 500);

}


document.addEventListener('DOMContentLoaded', function() {
    const subemail = 'naveen@nivasinc.com'; //naveen@nivasinc.com
const GOOGLE_SHEETS_API_URL = 'https://script.google.com/macros/s/AKfycbxIms1vc3jB0qjFuk4WJYkM5LfMTf_WKdN7j2XnHZBTn4mirL7muehliSAl4iV-UOnuQA/exec';
    
    // Common functions
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function createEmailTemplate(email, title) {
        return `
            <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #333;">${title}</h2>
                <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
                    <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
                </div>
            </div>`;
    }

    function handleSubscription(formConfig) {
        const { input, button, buttonText, loadingSpinner, successTick, errorIcon } = formConfig;

        function setLoadingState(isLoading) {
            if (buttonText) buttonText.classList.toggle('d-none', isLoading);
            loadingSpinner.classList.toggle('d-none', !isLoading);
            button.disabled = isLoading;
        }

        function setSuccessState() {
            loadingSpinner.classList.add('d-none');
            successTick.classList.remove('d-none');
            setTimeout(() => {
                successTick.classList.add('d-none');
                if (buttonText) buttonText.classList.remove('d-none');
                button.disabled = false;
            }, 2000);
        }

        function setErrorState() {
            loadingSpinner.classList.add('d-none');
            errorIcon.classList.remove('d-none');
            button.classList.add('error');
            setTimeout(() => {
                errorIcon.classList.add('d-none');
                if (buttonText) buttonText.classList.remove('d-none');
                button.classList.remove('error');
                button.disabled = false;
            }, 2000);
        }

        button.addEventListener('click', async function(e) {
            e.preventDefault();
            
            const email = input.value.trim();
            
            if (!email || !validateEmail(email)) {
                setErrorState();
                return;
            }

            setLoadingState(true);

            const emailContent = {
                subject: 'New Newsletter Subscription',
                sender: subemail,
                html: createEmailTemplate(email, 'New Newsletter Subscription')
            };

            const formDataPayload = new FormData();
            formDataPayload.append('subject', emailContent.subject);
            formDataPayload.append('emailTemplate', emailContent.html);
            formDataPayload.append('sender', emailContent.sender);

            try { 
                
                const sheetData = {
                formType: 'Newsletter',
                formData: {email:email}
            };
console.log(sheetData);
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


                const response = await fetch(apiUrl, {
                    method: 'POST',
                    body: formDataPayload,
                    mode: 'cors'
                });

                if (response.ok) {
                    setSuccessState();
                    input.value = '';
                } else {
                    throw new Error('Subscription failed');
                }
            } catch (error) {
                setErrorState();
            }
        });
    }

    // Initialize both forms
    const forms = [
        {
            input: document.querySelector('.email'),
            button: document.querySelector('[data-email-click]'),
            buttonText: document.querySelector('[data-email-click] .button-text'),
            loadingSpinner: document.querySelector('[data-email-click] .loading-spinner'),
            successTick: document.querySelector('[data-email-click] .success-tick'),
            errorIcon: document.querySelector('[data-email-click] .error-icon')
        },
        {
            input: document.querySelector('.email-subscription input'),
            button: document.querySelector('[data-email-subscribe]'),
            buttonText: document.querySelector('[data-email-subscribe] .button-text'),
            loadingSpinner: document.querySelector('[data-email-subscribe] .loading-spinner'),
            successTick: document.querySelector('[data-email-subscribe] .success-tick'),
            errorIcon: document.querySelector('[data-email-subscribe] .error-icon')
        }
    ];

    forms.forEach(form => {
        if (form.button && form.input) {
            handleSubscription(form);
        }
    });
});


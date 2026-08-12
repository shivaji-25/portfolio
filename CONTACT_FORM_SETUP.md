# Contact Form Setup Guide

Your contact form is now configured to send emails directly to you. Follow these steps to complete the setup:

## Option 1: Formspree (Recommended - Free & Easy)

1. **Sign up at Formspree**
   - Go to https://formspree.io/
   - Create a free account
   - Create a new form

2. **Get Your Form ID**
   - After creating the form, you'll get a Form ID (looks like: `xYourFormID`)
   - Copy this ID

3. **Update the Contact Component**
   - Open `src/components/Contact.jsx`
   - Find line with: `https://formspree.io/f/YOUR_FORM_ID`
   - Replace `YOUR_FORM_ID` with your actual Form ID
   - Example: `https://formspree.io/f/xYourFormID`

4. **Configure Formspree (Optional)**
   - Set your email address in Formspree dashboard
   - Enable email notifications
   - Customize confirmation message

## Option 2: EmailJS (Alternative)

If you prefer EmailJS:

1. Sign up at https://www.emailjs.com/
2. Create an email service
3. Create an email template
4. Install EmailJS: `npm install @emailjs/browser`
5. Update the code to use EmailJS SDK

## Option 3: Custom Backend

For production use, consider:
- Node.js with Nodemailer
- AWS SES (Simple Email Service)
- SendGrid API
- Your own backend endpoint

## Testing

After setup:
1. Fill out the contact form on your portfolio
2. Click "Send inquiry"
3. Check your email for the message
4. Verify the form shows success message

## Features Included

✅ Loading state while sending
✅ Success message (green)
✅ Error handling (red)
✅ Form clears after successful send
✅ Disabled button while sending
✅ Professional email formatting

## Current Form Behavior

The form will:
- Show "Sending..." while processing
- Display success message in green if sent
- Display error message in red if failed
- Clear the form after successful submission
- Auto-hide success message after 5 seconds

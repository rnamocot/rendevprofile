# Formspree Integration Setup Guide

This guide will help you set up Formspree for handling both newsletter signups and resume download requests using a single form.

## 🚀 **Quick Setup Steps**

### 1. **Create Formspree Account**
- Go to [https://formspree.io](https://formspree.io)
- Sign up for a free account
- Verify your email address

### 2. **Create New Form**
- Click "New Form" in your dashboard
- Form Name: `Renie Portfolio Contacts`
- Form Description: `Newsletter signups and resume downloads`
- Click "Create Form"

### 3. **Get Your Form ID**
After creating the form, you'll see a form ID like: `xyzabc123`

The full endpoint will be: `https://formspree.io/f/xyzabc123`

### 4. **Update Configuration**
Open `src/app/lib/config.js` and replace `YOUR_FORM_ID` with your actual form ID:

```javascript
export const config = {
  formspree: {
    formId: 'xyzabc123', // Replace with your actual form ID
    endpoint: 'https://formspree.io/f/xyzabc123'
  },
  // ... rest of config
};
```

## 📋 **Form Fields Configuration**

Your Formspree form will receive different types of submissions:

### **Newsletter Signup Fields:**
- `name` - User's name (optional)
- `email` - User's email address
- `subject` - "Newsletter Subscription"
- `type` - "newsletter"
- `source` - "blog_page"

### **Resume Download Fields:**
- `name` - User's name
- `email` - User's email address  
- `subject` - "Resume Download Request"
- `type` - "resume_download"
- `source` - "resume_modal"
- `timestamp` - When request was made
- `userAgent` - User's browser info
- `referrer` - Where user came from

## ⚙️ **Formspree Settings**

### **Email Notifications**
1. Go to your form settings
2. Enable "Email notifications"
3. Set notification email to your preferred address
4. Customize email template if desired

### **Spam Protection**
1. Enable "reCAPTCHA" for additional spam protection
2. Enable "Honeypot" field for bot detection
3. Set up custom validation rules if needed

### **Auto-Response**
Set up auto-responses for different form types:

**For Newsletter:**
```
Subject: Welcome to Renie's Newsletter! 🎉
Message: Thanks for subscribing! You'll receive the latest web development insights and tutorials.
```

**For Resume Downloads:**
```
Subject: Thanks for downloading my resume!
Message: Hi [name], thanks for your interest! I've sent you my latest resume. Feel free to reach out if you have any questions.
```

## 🎯 **Testing Your Setup**

### **1. Test Newsletter Signup**
- Visit your blog page
- Scroll to "Stay Updated" section
- Enter test email and submit
- Check Formspree dashboard for submission

### **2. Test Resume Download**
- Click "Resume" button on homepage
- Fill out the modal form
- Check that download starts
- Verify submission in Formspree dashboard

## 📊 **Analytics Integration**

Both forms automatically track events in Google Analytics:
- `newsletter_signup` - When someone subscribes
- `resume_download` - When someone downloads resume

## 🛡️ **Security & Privacy**

### **Data Handling**
- Formspree stores form submissions securely
- All data is transmitted via HTTPS
- You can export or delete data anytime

### **GDPR Compliance**
- Forms include privacy notices
- Users can request data deletion
- Formspree is GDPR compliant

## 💰 **Pricing Information**

### **Free Plan Limits:**
- 50 submissions per month
- Basic spam filtering
- Email notifications

### **Paid Plans:**
- Gold: $10/month - 1,000 submissions
- Platinum: $40/month - 10,000 submissions
- Advanced features like file uploads, custom redirects

## 🔧 **Advanced Configuration**

### **Custom Redirects**
After form submission, redirect users to a thank you page:

```javascript
// In your Formspree dashboard, set:
// Redirect URL: https://renienamocot.com/thank-you
```

### **Webhook Integration**
Send form data to other services (Slack, Discord, etc.):

```javascript
// Example webhook payload
{
  "email": "user@example.com",
  "name": "John Doe",
  "type": "newsletter",
  "source": "blog_page"
}
```

## 🆘 **Troubleshooting**

### **Common Issues:**

1. **Form not submitting**
   - Check form ID in config.js
   - Verify endpoint URL format
   - Check browser console for errors

2. **Not receiving emails**
   - Check spam folder
   - Verify notification email in Formspree settings
   - Ensure form is not in test mode

3. **Submissions not appearing**
   - Check Formspree dashboard
   - Verify form ID is correct
   - Check network tab for failed requests

### **Debug Mode**
Enable debug mode to see detailed error messages:

```javascript
// Add to your form components
console.log('Submitting to:', getFormspreeEndpoint());
console.log('Form data:', formData);
```

## ✅ **Setup Checklist**

- [ ] Created Formspree account
- [ ] Created new form in dashboard
- [ ] Updated config.js with form ID
- [ ] Tested newsletter signup
- [ ] Tested resume download
- [ ] Configured email notifications
- [ ] Set up auto-responses
- [ ] Enabled spam protection
- [ ] Verified analytics tracking

## 📞 **Support**

- **Formspree Docs:** https://help.formspree.io
- **Formspree Support:** support@formspree.io
- **Status Page:** https://status.formspree.io

---

**Your forms are now professionally managed with Formspree! 🎉**

Both newsletter signups and resume downloads will be handled through the same endpoint, making management simple and efficient.
# Email Configuration for Rick's Environmental Website

This document explains how to set up email functionality for the contact form.

## Development Environment

For development purposes, the application uses [Ethereal](https://ethereal.email/) - a fake SMTP service that captures emails instead of sending them to real recipients. This allows you to test the email functionality without sending real emails.

When testing in development:

1. No configuration is needed - the application will automatically create a test account on Ethereal
2. When a form is submitted, check the console logs for a "Preview URL" link
3. Open this link to see the email that would have been sent

## Production Configuration

For production, you'll need to configure a real email service. Follow these steps:

1. Create a `.env.local` file at the root of the project (if it doesn't exist)
2. Add the following environment variables:

```
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-password
EMAIL_FROM="Rick's Environmental Contact <info@ricksenvironmental.org>"
```

### Service-specific Examples

#### Gmail

```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password  # Use an App Password, not your regular password
EMAIL_FROM="Rick's Environmental <your-gmail@gmail.com>"
```

Note: For Gmail, you'll need to [create an App Password](https://support.google.com/accounts/answer/185833) instead of using your regular password.

#### SendGrid

```
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=apikey
EMAIL_PASS=your-sendgrid-api-key
EMAIL_FROM="Rick's Environmental <info@ricksenvironmental.org>"
```

#### AWS SES

```
EMAIL_HOST=email-smtp.eu-west-1.amazonaws.com  # Use your region
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-ses-smtp-username
EMAIL_PASS=your-ses-smtp-password
EMAIL_FROM="Rick's Environmental <info@ricksenvironmental.org>"
```

## Deploying to Production

When deploying to production:

1. Set these environment variables in your hosting provider's environment configuration
2. For Vercel: Add these in the Vercel dashboard under Project Settings > Environment Variables
3. For other providers: Consult their documentation on setting environment variables

## Troubleshooting

If emails aren't being sent:

1. Check that your email service is properly configured
2. Verify that your credentials are correct
3. Look for error messages in the server logs
4. Some email providers require additional security settings (like allowing "less secure apps" or creating app-specific passwords)

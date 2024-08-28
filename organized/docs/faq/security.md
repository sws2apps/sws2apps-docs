---
sidebar_position: 2
---

# Security and privacy

## Is organized online or cloud-based app?

The Organized app is not a typical online or cloud-based app. While it can be accessed via a web browser, it can also be downloaded and used locally on your device. The app is designed to store all data directly on your device, ensuring that your information remains in your hands.

A online server connection is only required for login purposes and to organize data sharing between congregation members. This connection is securely encrypted, guaranteeing the protection of your data. In essence, the Organized app combines the convenience of web access with the security and local storage of a downloaded application.

## Is Organized secure and protected to be used in a congregation?

Sure! We take security seriously. You can use the app locally with just your device, meaning none of the information is sent to the internet – everything only stored locally on your mobile or desktop device (but that also means that if you clear your browser's history or cookies, the data will also be removed). For the full experience though, try features that use online sync across your devices and other within your congregation. This way, everyone in the congregation using Organized can see schedules, assignments, territories, and more that you share. 

So, the app itself is well-protected to be used both in a single mode, but also with a congregation. Read further to learn more.

## What security measures are in place to protect user and congregation data?

End-to-end encryption, encryption key, app PIN code, two-factor authentication, one-time invitation code, advanced access control – that's not even the full list of security measures we take to ensure full security and privacy of the Organized app and its users. We do our best to implement these features and teach users how to properly use them.

## Can the Organized app team access my congregation data?

No, the Organized app team **can not** access your congregation data. Without the encryption key, no one on the Internet can access your congregation data, including the Organized app team.

## What does "Organized is open-source" mean? Is it safe?

In the case of Organized, this means that anyone can access the code that makes the app work. Before making the app's source code available online, we've completed a comprehensive test of its security, and we continue improving it. Open-source approach is safe and has several benefits, including:

- **Transparency:** Anyone can check how the app works, this increases trust in its security.
- **Collaboration:** Developers can work together to improve the code and add new features.

Regarding security, it's important to note that **the app's codebase is completely separate from the database that contains the congregation's data**. The code is how the app works, while the database contains the data that is displayed to users. The data is always privately secured and encrypted, and access is restricted to only those who are authorized to view it.

In fact, open-source software can often be more secure than closed-source software because the code is publicly available for scrutiny. This means that any security vulnerabilities can be identified and fixed more quickly.

_In summary, "Organized is open-source" means that the app's source code is publicly available for anyone to view, use, and collaborate. However, this does not mean that anybody can view or access user data from it. The codebase and the database are completely separate, and the data is always privately secured and encrypted. Only authorized individuals can view and access the data, ensuring that it remains confidential and protected at all times._

## What is end-to-end encryption, and how does it protect congregation data?

End-to-end encryption is a security protocol that ensures data is encrypted **before** it is sent or synced to servers. With end-to-end encryption, only the sender and intended recipient can access the data, making it virtually impossible for unauthorized users to intercept or access the data. Each congregation has their own strong encryption code that contains symbols, letters, numbers, and is not even mathematically generated.

When a brother creates a congregation, they also create a strong encryption key for the congregation. This key is used to encrypt and decrypt the congregation data, ensuring that only authorized users with the key can access the data.

## How is my congregation data protected during online sync?

All congregation and user information is encrypted before it is synced or sent to our servers using Google Firebase, which is the standard leading solution used by thousands of tech companies, including big ones. This means that even if someone were to intercept the data during transmission, they would not be able to access it without the encryption key. Firebase provides secure data storage and ensures that all data is encrypted both in transit and at rest.

## Can somebody gain access to my congregation by stealing encryption code?

No, stealing the encryption code alone would not be enough to gain access to your congregation. The encryption code is just one part of the security measures in place to protect your congregation's data. Additionally, access to the congregation is restricted to authorized users only, and unauthorized access attempts are closely monitored and prevented. So, even if someone were to obtain the encryption code, they would still not be able to gain unauthorized access to your congregation.

Please remind all Organized users not to share the congregation encryption key with anyone. It's important to assign a reliable brother to manage the Organized administration task and ensure the key is kept secure and maintaining other security measures.

## Can each user access the full data about the congregation?

No, each user cannot access the full data about the congregation. Access to congregation data is controlled by the congregation's administrator, who can assign different permissions to different users based on their roles and responsibilities. 

_For example, a coordinator of a congregation may have access to all data and features, while a "Living as Christians" meeting overseer may only have access to midweek meeting schedules and be able to schedule midweek meetings, without access to weekend meeting scheduling. Publishers may be able to submit service reports, while midweek meeting students may only be able to view meeting schedules and their upcoming assignments._

## Does the Organized app share my data with third-party companies?

No, we do not share your data with any third-party companies. 

When you choose to use our Organized app, we only collect essential information like your name and email. Additionally, we gather your device's IP address and your device's user agent details to enhance your experience with our app. **We prioritize your privacy and never allow advertising companies to track you through our services** or use your data for targeted ads. Any information you provide in the Organized app remains strictly confidential and is never shared with outside parties. We are committed to protecting your personal information and maintaining your trust.

## Can I run the Organized without my own server and database?

We are currently working on this. With future updates, you will be able to run Organized on your own server with your own database, giving you uncompromised control over all data and access. 

## Where my Organized data is stored?

Your data is stored securely in Organized, depending on how you use the app. 

- If you're using the app alone on a single device, your data is stored only locally on that device. 

- If you're using the app with your congregation or on multiple devices, your data is still **stored on your device**, but data backups are also regularly shared with other members of your congregation _(only the data allowed them to view, such as schedules, persons, groups, etc.)_. All the data backups are encrypted using your own strong encryption code and securely shared across congregation members through our servers. All data is stored with the highest level of security, and no one unauthorized can access or read it.

## What is the difference between the Congregation master key and Congregation access code?

Both the Congregation master key and the Congregation access code serve to protect your congregation’s data through end-to-end encryption, but they differ in their access levels and purposes:

- **Access code:** This code is used by *everyone* who wants to join your congregation in the Organized app and when logging in on new devices. It’s the final step in the registration process, confirming that the person has been authorized by the congregation's elders. However, possessing the access code alone doesn't grant full access — administrators still have to manage and adjust user role(s) and permissions after they join. The Congregation access code should be relatively user-friendly, meaning it should be easy to enter multiple times by different age groups in the congregation, featuring a thoughtful mix of words and numbers. It’s important to avoid using obvious or commonly known phrases to maintain security. This balance ensures that while the code is accessible for legitimate users, it remains secure against unauthorized access.

- **Master key:** This code provides a higher level of access, required by those who handle significant congregation data, such as scheduling, reporting and managing the congregation account. The master key is more secure, longer, and complex, and it's known only to a select few trustworthy brothers who are responsible for the congregation’s administrative tasks.

In summary, while the access code allows users to join the congregation and view the basic information about meetings and other congregation activities, the master key safeguards the administrative functions, ensuring that only authorized individuals can perform administrative tasks.
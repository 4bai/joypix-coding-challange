# **Next.js Coding Challenge: Gamer Discussion Snippets**

![pixy-coding-challenge](https://raw.githubusercontent.com/company-recruitment/coding-challenge/main/assets/pixy-coding-challenge.png)

[![language](https://img.shields.io/badge/language-English-121212.svg?style=for-the-badge&labelColor=121212f2&color=9945FF)](https://github.com/company-recruitment/coding-challenge/blob/main/README.md)
[![language](https://img.shields.io/badge/language-German-121212.svg?style=for-the-badge&labelColor=121212f2&color=9945FF)](https://github.com/company-recruitment/coding-challenge/blob/main/README-de.md)

Hi 👋! This is my entry for the coding challange from Joypix.

Please run the supabase/shema.sql at supabase for setting up the database und functions.
After register a user validate the email or disable validation before.

#### **What We Expect**

We expect this task to take about 2-3 hours. The focus is on writing clean, well-structured code and implementing the key features.

#### **The Challenge**

Develop a simple application that allows users to create and display **short discussion snippets**. These snippets could be short opinions or questions about a specific game or topic.

**Features:**

1. **Create and Display Snippets:**

   - Users should be able to create short discussion posts (snippets) via a simple form.
   - These snippets should be stored in a PostgreSQL database (via Supabase).
   - A list of snippets should be displayed on the main page.

2. **Use `nyxbui.design` Components:**
   - Use components from `nyxbui.design` for the form and the display of snippets.

#### **Database Requirements**

- **Mandatory Requirement:** The application must include a database structure that allows for storing and retrieving discussion snippets.
- **Open-ended:** It is up to you how you design the database structure. Consider what information should be stored (e.g., content, timestamp, user information, etc.) and how best to structure it.

#### **Supabase Setup**

To ensure all applicants have an optimal experience, you will set up your own Supabase project. Here is a step-by-step guide:

1. **Create a Supabase Account:**

   - Go to [supabase.com](https://supabase.com) and sign up.
   - Create a new project. Note down the `API URL` and `anon key` that you will need later.

2. **Create the Necessary Table(s):**

   - Think about what tables you need and what columns make sense. This could be a table for snippets where the content and other relevant information are stored.

3. **Configure Your Next.js Project:**

   - Use the provided `.env.local.example` file to configure the Supabase URL and anon key in your `.env.local` file:

   ```plaintext
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_KEY=your-anon-key
   ```

4. **Install Supabase:**

   - If not already done, install the Supabase JavaScript SDK:

   ```bash
   npm install @supabase/supabase-js
   ```

5. **Connect Your Project to Supabase:**
   - In your Next.js project, you can now use the Supabase client library to access your database.

#### **Preconfigured Project**

We provide you with a base project preconfigured with Next.js, Tailwind CSS, and `nyxbui.design`. You just need to clone it and follow the steps above to set up Supabase.

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/company-recruitment/coding-challenge.git
   cd coding-challenge
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run the Development Server:**
   ```bash
   npm run dev
   ```

#### **FAQs**

- **What if I have trouble setting up Supabase?** The Supabase documentation is a good starting point. This task is also designed to test your ability to use new tools and find your way independently.
- **Should I implement specific features?** You can prioritize the features you think are most important. We are looking for a solid foundation that shows how you solve challenges.

#### **Good Luck! 💪**

Once you are done, send us a confirmation email. After your submission, we will get in touch with you.

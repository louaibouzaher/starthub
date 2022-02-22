export const connectedUser = {
  picture:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@starthub.com',
  position: 'Software Engineer',
  biography: `I'm a passionate Software Engineer 💻 and Tech Enthusiats 🧑‍💻. Co-Founder of StartHub 💹 Interested in new investment opportunities. 💵`,
  posts: [
    {
      user: {
        avatar:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        firstName: 'John',
        lastName: 'Doe',
      },
      title: 'Checkout the latest news about our UNICORN 🦄',
      content: `#MENA #Investment #TechStartup`,
      picture:
        'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      time: Math.floor(Math.random() * 15) + 1 + ' hours ago',
    },
    {
      title: 'Breaking News!',
      user: {
        avatar:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        firstName: 'John',
        lastName: 'Doe',
      },
      content: `I JUST GOT MY FIRST INVESTMENT ⚡ \n
          #Spotify #MusicBusiness #2K22`,
      picture: null,
      time: Math.floor(Math.random() * 15) + 1 + ' hours ago',
    },
  ],
  projects: [
    {
      user: {
        picture:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        firstName: 'John',
        lastName: 'Doe',
        position: 'Software Engineer',
      },
      title: 'The New Uber Is Here!',
      description: `A platform where those who drive and deliver can connect with riders, eaters, and restaurants. In cities where Uber is available, you can use the Uber app to request a ride. When a nearby driver accepts your request, the app displays an estimated time of arrival for the driver heading to your pickup location.`,
      vision: `
    ⚡ First Vison \n
    ⚡ Second Vison \n
    ⚡ Third Vison
    `,
      video: 'https://youtu.be/ASfhYIyzTQQ',
      field: 'VTC',
      tags: 'Tech,Delivery,Urban',
      location: 'Beirut, Lebanon',
      numberOfEmployees: 20,
      ageInMonths: 12,
    },
  ],
}

// Mock API functions - replace with actual API calls
export const api = {
  getEvents: async () => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(eventsData)
      }, 1000)
    })
  },

  getTeamMembers: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(teamData)
      }, 1000)
    })
  },

  getGalleryImages: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(galleryData)
      }, 1000)
    })
  },
}
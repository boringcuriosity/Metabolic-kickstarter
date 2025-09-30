export interface Resource {
  id: string;
  image: string;
  title: string;
  type: string;
}

export const resourcesData: { [key: string]: Resource[] } = {
  // Week 1 Resources
  'day1-week1': [
    {
      id: 'protein-nutrition-guide',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZWluJTIwZm9vZCUyMGhlYWx0aHklMjBudXRyaXRpb258ZW58MXx8fHwxNzU4MDA5NDk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Complete Guide to High-Protein Nutrition',
      type: 'Article'
    },
    {
      id: 'protein-meal-prep',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbWVhbCUyMHByZXAlMjBwcm90ZWluJTIwZGlldHxlbnwxfHx8MTc1ODAwOTQ5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Protein-Rich Meal Prep for Busy Lifestyles',
      type: 'Article'
    }
  ],

  'day2-week1': [
    {
      id: 'hydration-metabolism-science',
      image: 'https://images.unsplash.com/photo-1548839140-5b7c0a0a0a0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGh5ZHJhdGlvbiUyMGhlYWx0aCUyMGVuZXJneXxlbnwxfHx8MTc1ODAwOTQ5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Hydration Science: How Water Powers Your Metabolism',
      type: 'Article'
    },
    {
      id: 'smart-hydration-strategies',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGRyaW5raW5nJTIwaGFiaXRzJTIwaGVhbHRoeSUyMGVuZXJneXxlbnwxfHx8MTc1ODAwOTQ5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Smart Hydration Strategies for Busy Professionals',
      type: 'Article'
    }
  ],

  'day3-week1': [
    {
      id: 'micro-movements-energy',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZlbWVudCUyMGV4ZXJjaXNlJTIwaGVhbHRoeSUyMGVuZXJneXxlbnwxfHx8MTc1ODAwOTQ5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Micro-Movements: Small Steps to Big Energy Gains',
      type: 'Article'
    },
    {
      id: 'desk-friendly-exercises',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3RpdmUlMjBsaWZlc3R5bGUlMjB0aXBzJTIwaGVhbHRoeSUyMGVuZXJneXxlbnwxfHx8MTc1ODAwOTQ5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Desk-Friendly Exercises for Office Workers',
      type: 'Article'
    }
  ],

  'day4-week1': [
    {
      id: 'sleep-quality-metabolism',
      image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbGVlcCUyMGhlYWx0aCUyMG1ldGFib2xpc20lMjBlbmVyZ3l8ZW58MXx8fHwxNzU4MDA5NDk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Sleep Quality: The Hidden Key to Metabolic Health',
      type: 'Article'
    },
    {
      id: 'perfect-bedtime-ritual',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbGVlcCUyMHJvdXRpbmUlMjBoYWJpdHMlMjBoZWFsdGh5JTIwZW5lcmd5fGVufDF8fHwxNzU4MDA5NDk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Creating the Perfect Bedtime Ritual for Better Rest',
      type: 'Article'
    }
  ],

  'day5-week1': [
    {
      id: 'stress-reduction-metabolic',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlc3MlMjBtYW5hZ2VtZW50JTIwaGVhbHRoeSUyMGVuZXJneXxlbnwxfHx8MTc1ODAwOTQ5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Stress Reduction Techniques for Metabolic Wellness',
      type: 'Article'
    },
    {
      id: 'mindfulness-instant-calm',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5kZnVsbmVzcyUyMG1lZGl0YXRpb24lMjBoZWFsdGh5JTIwZW5lcmd5fGVufDF8fHwxNzU4MDA5NDk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: '5-Minute Mindfulness Practices for Instant Calm',
      type: 'Article'
    }
  ],

  'day6-week1': [
    {
      id: 'habit-formation-science',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwaGFiaXRzJTIwbGlmZXN0eWxlJTIwZW5lcmd5fGVufDF8fHwxNzU4MDA5NDk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'The Science of Habit Formation for Long-term Success',
      type: 'Article'
    },
    {
      id: 'smart-health-monitoring',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmVzcyUyMHRyYWNraW5nJTIwaGVhbHRoeSUyMGVuZXJneXxlbnwxfHx8MTc1ODAwOTQ5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Smart Ways to Monitor Your Health Journey',
      type: 'Article'
    }
  ],

  'day7-week1': [
    {
      id: 'sustainable-health-balance',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxhbmNlJTIwbGlmZXN0eWxlJTIwaGVhbHRoeSUyMGVuZXJneXxlbnwxfHx8MTc1ODAwOTQ5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Sustainable Health: Finding Your Perfect Balance',
      type: 'Article'
    },
    {
      id: 'maintaining-momentum-beyond',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25nJTIwdGVybSUyMGhlYWx0aCUyMHN1Y2Nlc3MlMjBlbmVyZ3l8ZW58MXx8fHwxNzU4MDA5NDk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Maintaining Momentum: Your Journey Beyond Week 1',
      type: 'Article'
    }
  ],

  // Week 2 Resources - Completely different from Week 1
  'day1-week2': [
    {
      id: 'fiber-vegetables-weight-loss',
      image: 'https://images.unsplash.com/photo-1546554137-f86b9593a222?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFibGVzJTIwZmliZXIlMjBoZWFsdGh5JTIwZWF0aW5nJTIwZGlldHxlbnwxfHx8MTc1ODAwOTQ5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Fiber-Rich Vegetables for Sustainable Weight Loss',
      type: 'Article'
    },
    {
      id: 'nutrient-vegetable-recipes',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXRyaXRpb24lMjB2ZWdldGFibGVzJTIwaGVhbHRoeSUyMGVhdGluZyUyMGdyZWVuc3xlbnwxfHx8MTc1ODAwOTQ5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Nutrient-Dense Vegetable Recipes for Every Meal',
      type: 'Article'
    }
  ],

  'day2-week2': [
    {
      id: 'morning-hydration-routine',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JuaW5nJTIwaHlkcmF0aW9uJTIwcm91dGluZSUyMGhlYWx0aCUyMGVuZXJneXxlbnwxfHx8MTc1ODAwOTQ5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Morning Hydration Routine for Peak Performance',
      type: 'Article'
    },
    {
      id: 'water-intake-optimization',
      image: 'https://images.unsplash.com/photo-1548839140-5b7c0a0a0a0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGludGFrZSUyMG9wdGltaXphdGlvbiUyMGhlYWx0aCUyMGVuZXJneXxlbnwxfHx8MTc1ODAwOTQ5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Water Intake Optimization for Maximum Energy',
      type: 'Article'
    }
  ],

  'day3-week2': [
    {
      id: 'cardio-fat-burning',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaW8lMjBmYXQlMjBidXJuaW5nJTIwaGVhbHRoeSUyMGVuZXJneXxlbnwxfHx8MTc1ODAwOTQ5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Cardio Training: Unlocking Your Fat-Burning Potential',
      type: 'Article'
    },
    {
      id: 'running-metabolism-boost',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwbWV0YWJvbGlzbSUyMGJvb3N0JTIwaGVhbHRoeSUyMGVuZXJneXxlbnwxfHx8MTc1ODAwOTQ5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Running for Metabolism: The Complete Beginner\'s Guide',
      type: 'Article'
    }
  ],

  'day4-week2': [
    {
      id: 'digital-detox-sleep',
      image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZGV0b3glMjBzbGVlcCUyMGhlYWx0aCUyMGVuZXJneXxlbnwxfHx8MTc1ODAwOTQ5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Digital Detox for Better Sleep Quality',
      type: 'Article'
    },
    {
      id: 'screen-time-sleep-impact',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3JlZW4lMjB0aW1lJTIwc2xlZXAlMjBpbXBhY3QlMjBoZWFsdGh5JTIwZW5lcmd5fGVufDF8fHwxNzU4MDA5NDk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Screen Time and Sleep: Breaking the Blue Light Cycle',
      type: 'Article'
    }
  ],

  'day5-week2': [
    {
      id: 'mindfulness-stress-management',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5kZnVsbmVzcyUyMHN0cmVzcyUyMG1hbmFnZW1lbnQlMjBoZWFsdGh5JTIwZW5lcmd5fGVufDF8fHwxNzU4MDA5NDk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Mindfulness-Based Stress Management Techniques',
      type: 'Article'
    },
    {
      id: 'breathing-exercises-calm',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVhdGhpbmclMjBleGVyY2lzZXMlMjBjYWxtJTIwaGVhbHRoeSUyMGVuZXJneXxlbnwxfHx8MTc1ODAwOTQ5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Breathing Exercises for Instant Stress Relief',
      type: 'Article'
    }
  ],

  'day6-week2': [
    {
      id: 'hiit-workout-benefits',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWl0JTIwd29ya291dCUyMGJlbmVmaXRzJTIwaGVhbHRoeSUyMGVuZXJneXxlbnwxfHx8MTc1ODAwOTQ5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'HIIT Workouts: Maximum Results in Minimum Time',
      type: 'Article'
    },
    {
      id: 'sprint-training-metabolism',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcHJpbnQlMjB0cmFpbmluZyUyMG1ldGFib2xpc20lMjBoZWFsdGh5JTIwZW5lcmd5fGVufDF8fHwxNzU4MDA5NDk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Sprint Training: The Ultimate Metabolism Booster',
      type: 'Article'
    }
  ],

  'day7-week2': [
    {
      id: 'balanced-lifestyle-sustainability',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxhbmNlZCUyMGxpZmVzdHlsZSUyMHN1c3RhaW5hYmlsaXR5JTIwaGVhbHRoeSUyMGVuZXJneXxlbnwxfHx8MTc1ODAwOTQ5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Balanced Lifestyle: The Key to Sustainable Health',
      type: 'Article'
    },
    {
      id: 'long-term-wellness-journey',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25nJTIwdGVybSUyMHdlbGxuZXNzJTIwanVybmV5JTIwaGVhbHRoeSUyMGVuZXJneXxlbnwxfHx8MTc1ODAwOTQ5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Your Long-term Wellness Journey: What\'s Next?',
      type: 'Article'
    }
  ]
};

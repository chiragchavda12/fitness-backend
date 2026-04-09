import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-workout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './workout.html',
  styleUrls: ['./workout.css']
})
export class WorkoutComponent {

  constructor(
    private sanitizer: DomSanitizer,
    private http: HttpClient
  ) { }

  /* ================= SEARCH ================= */

  searchText: string = "";
  selectedMuscle: string = "";

  /* ================= VIDEO SAFE ================= */

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  /* ================= VIDEO ID ================= */

  getVideoId(url: string) {
    return url.split('/embed/')[1];
  }

  /* ================= FILTER ================= */

  get filteredExercises() {
    return this.exercises.filter(e => {

      const matchSearch = e.name
        .toLowerCase()
        .includes(this.searchText.toLowerCase());

      const matchMuscle = this.selectedMuscle
        ? e.muscles.includes(this.selectedMuscle)
        : true;

      return matchSearch && matchMuscle;
    });
  }


  /* ================= EXERCISE LIBRARY ================= */

  exercises = [

    {
      name: "Push Ups",
      video: "https://www.youtube.com/embed/IODxDxX7oi4",
      description: "Push ups build chest strength.",
      muscles: ["Chest", "Triceps"],
      sets: 3,
      reps: 12,
      rest: "30 sec",
      play: false
    },

    {
      name: "Squats",
      video: "https://www.youtube.com/embed/aclHkVaku9U",
      description: "Squats strengthen legs.",
      muscles: ["Legs", "Glutes"],
      sets: 3,
      reps: 15,
      rest: "45 sec",
      play: false
    },

    {
      name: "Plank",
      video: "https://www.youtube.com/embed/pSHjTRCQxIw",
      description: "Core strengthening plank.",
      muscles: ["Core"],
      sets: 3,
      reps: "30 sec",
      rest: "30 sec",
      play: false

    },

    {
      name: "Lunges",
      video: "https://www.youtube.com/embed/QOVaHwm-Q6U",
      description: "Great leg exercise.",
      muscles: ["Legs"],
      sets: 3,
      reps: 12,
      rest: "30 sec",
      play: false
    },

    {
      name: "Jumping Jacks",
      video: "https://www.youtube.com/embed/c4DAnQ6DtF8",
      description: "Cardio warmup exercise.",
      muscles: ["Cardio"],
      sets: 3,
      reps: 25,
      rest: "20 sec",
      play: false
    },

    {
      name: "Mountain Climbers",
      video: "https://www.youtube.com/embed/nmwgirgXLYM",
      description: "Full body cardio workout.",
      muscles: ["Core", "Cardio"],
      sets: 3,
      reps: 20,
      rest: "30 sec",
      play: false
    },

    {
      name: "Burpees",
      video: "https://www.youtube.com/embed/dZgVxmf6jkA",
      description: "Advanced fat burning exercise.",
      muscles: ["Full Body"],
      sets: 3,
      reps: 10,
      rest: "45 sec",
      play: false
    },

    {
      name: "Bicep Curl",
      video: "https://www.youtube.com/embed/in7PaeYlhrM",
      description: "Build strong biceps.",
      muscles: ["Biceps"],
      sets: 3,
      reps: 12,
      rest: "30 sec",
      play: false
    },

    {
      name: "Tricep Dips",
      video: "https://www.youtube.com/embed/6kALZikXxLc",
      description: "Strengthen triceps.",
      muscles: ["Triceps"],
      sets: 3,
      reps: 10,
      rest: "30 sec",
      play: false
    },

    {
      name: "Shoulder Press",
      video: "https://www.youtube.com/embed/qEwKCR5JCog",
      description: "Develop shoulders.",
      muscles: ["Shoulders"],
      sets: 3,
      reps: 12,
      rest: "30 sec",
      play: false
    },

    {
      name: "Leg Raises",
      video: "https://www.youtube.com/embed/l4kQd9eWclE",
      description: "Core strengthening.",
      muscles: ["Core"],
      sets: 3,
      reps: 15,
      rest: "30 sec",
      play: false
    },

    {
      name: "Russian Twist",
      video: "https://www.youtube.com/embed/wkD8rjkodUI",
      description: "Oblique workout.",
      muscles: ["Core"],
      sets: 3,
      reps: 20,
      rest: "30 sec",
      play: false
    },



    {
      name: "Wall Sit",
      video: "https://www.youtube.com/embed/y-wV4Venusw",
      description: "Leg endurance.",
      muscles: ["Legs"],
      sets: 3,
      reps: "45 sec",
      rest: "30 sec",
      play: false
    },

    {
      name: "High Knees",
      video: "https://www.youtube.com/embed/OAJ_J3EZkdY",
      description: "Cardio exercise.",
      muscles: ["Cardio"],
      sets: 3,
      reps: 30,
      rest: "20 sec",
      play: false
    },



    {
      name: "Side Plank",
      video: "https://www.youtube.com/embed/K2VljzCC16g",
      description: "Core stability.",
      muscles: ["Core"],
      sets: 3,
      reps: "30 sec",
      rest: "30 sec",
      play: false
    },

    {
      name: "Superman Hold",
      video: "https://www.youtube.com/embed/z6PJMT2y8GQ",
      description: "Lower back workout.",
      muscles: ["Back"],
      sets: 3,
      reps: "30 sec",
      rest: "30 sec",
      play: false
    },

    {
      name: "Pull Ups",
      video: "https://www.youtube.com/embed/eGo4IYlbE5g",
      description: "Back strength exercise.",
      muscles: ["Back", "Biceps"],
      sets: 3,
      reps: 8,
      rest: "60 sec",
      play: false
    },



    {
      name: "Jump Squats",
      video: "https://www.youtube.com/embed/A-cFYWvaHr0",
      description: "Explosive leg power.",
      muscles: ["Legs"],
      sets: 3,
      reps: 12,
      rest: "45 sec",
      play: false
    },

    {
      name: "Step Ups",
      video: "https://www.youtube.com/embed/dQqApCGd5Ss",
      description: "Leg strengthening exercise.",
      muscles: ["Legs"],
      sets: 3,
      reps: 12,
      rest: "30 sec",
      play: false
    },



    {
      name: "Reverse Crunch",
      video: "https://www.youtube.com/embed/hyv14e2QDq0",
      description: "Lower abs workout.",
      muscles: ["Core"],
      sets: 3,
      reps: 15,
      rest: "30 sec",
      play: false
    },



    {
      name: "Tuck Jumps",
      video: "https://www.youtube.com/embed/A-cFYWvaHr0",
      description: "Advanced plyometric exercise.",
      muscles: ["Legs"],
      sets: 3,
      reps: 10,
      rest: "60 sec",
      play: false
    },

    {
      name: "Arm Circles",
      video: "https://www.youtube.com/embed/140RTNMciH8",
      description: "Shoulder warmup.",
      muscles: ["Shoulders"],
      sets: 3,
      reps: 20,
      rest: "20 sec",
      play: false
    },
    {
      name: "Jump Rope",
      video: "https://www.youtube.com/embed/cbKkB3POqaY",
      description: "Cardio endurance.",
      muscles: ["Cardio"],
      sets: 3,
      reps: "1 min",
      rest: "30 sec",
      play: false
    },


    {
      name: "Bear Crawl",
      video: "https://www.youtube.com/embed/wxwY7GXxL4k",
      description: "Full body strength.",
      muscles: ["Full Body"],
      sets: 3,
      reps: "30 sec",
      rest: "30 sec",
      play: false
    },

    {
      name: "Bench Dips",
      video: "https://www.youtube.com/embed/tKjcgfu44sI",
      description: "Triceps workout.",
      muscles: ["Triceps"],
      sets: 3,
      reps: 12,
      rest: "30 sec",
      play: false
    },

    {
      name: "Dead Bug",
      video: "https://www.youtube.com/embed/g_BYB0R-4Ws",
      description: "Core control exercise.",
      muscles: ["Core"],
      sets: 3,
      reps: 15,
      rest: "30 sec",
      play: false
    },



    {
      name: "Glute Bridge",
      video: "https://www.youtube.com/embed/wPM8icPu6H8",
      description: "Strengthen glutes.",
      muscles: ["Glutes"],
      sets: 3,
      reps: 15,
      rest: "30 sec",
      play: false
    },
    {
      name: "Flutter Kicks",
      video: "https://www.youtube.com/embed/ANVdMDaYRts",
      description: "Core and lower abs.",
      muscles: ["Core"],
      sets: 3,
      reps: 30,
      rest: "30 sec",
      play: false
    },

    {
      name: "Box Jumps",
      video: "https://www.youtube.com/embed/hxldG9FX4j4",
      description: "Explosive leg training.",
      muscles: ["Legs"],
      sets: 3,
      reps: 10,
      rest: "60 sec",
      play: false
    },

    {
      name: "Butt Kicks",
      video: "https://www.youtube.com/embed/vXVPvY1Ub6g",
      description: "Warmup cardio exercise.",
      muscles: ["Cardio"],
      sets: 3,
      reps: 30,
      rest: "20 sec",
      play: false
    }


  ];
  /* ================= SAVE WORKOUT ================= */

  completeWorkout(exercise: any) {

    const user = JSON.parse(localStorage.getItem("user") || "{}");

    console.log("👤 USER:", user);

    if (!user._id) {
      alert("⚠️ Please login first");
      return;
    }

    const data = {
      userId: user._id,
      exercise: exercise.name,
      video: exercise.video,
      sets: exercise.sets,
      reps: exercise.reps
    };

    console.log("🚀 Sending Data:", data);

    this.http.post(
      "https://fitness-ai-backend-4ash.onrender.com/api/workout/save",
      data
    ).subscribe({

      next: (res: any) => {
        console.log("✅ Response:", res);
        alert("✅ Workout saved successfully 💪");
      },

      error: (err) => {
        console.log("❌ FULL ERROR:", err);
        alert("❌ Error saving workout");
      }

    });
  }
}
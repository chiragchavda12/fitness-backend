import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClient } from '@angular/common/http'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'

@Component({
    selector: 'app-workout-history',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './workout-history.html',
    styleUrls: ['./workout-history.css']
})

export class WorkoutHistoryComponent implements OnInit {

    workouts: any[] = []

    api = "https://fitness-ai-backend-4ash.onrender.com/api"

    constructor(
        private http: HttpClient,
        private sanitizer: DomSanitizer
    ) { }

    ngOnInit() {

        const user = JSON.parse(localStorage.getItem("user") || "{}")

        if (!user._id) {
            console.log("User not logged in")
            return
        }

        /* FETCH HISTORY */

        this.http.get<any[]>(this.api + "/workout/user/" + user._id)
            .subscribe({

                next: (data) => {

                    this.workouts = data

                    // 🔥 IMPORTANT FIX (play property add)
                    this.workouts.forEach(w => w.play = false)

                },

                error: (err) => {
                    console.log("Workout history error", err)
                }

            })

    }

    /* SAFE VIDEO */

    getSafeUrl(url: string): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url)
    }

    /* 🔥 VIDEO ID (for thumbnail) */

    getVideoId(url: string) {
        return url.split('/embed/')[1]
    }

    /* DELETE WORKOUT */

    deleteWorkout(id: string) {

        this.http.delete(this.api + "/workout/" + id)
            .subscribe({

                next: () => {

                    this.workouts = this.workouts.filter(w => w._id !== id)

                    alert("🗑 Deleted successfully")

                },

                error: (err) => {
                    console.log("Delete error", err)
                }

            })

    }

}
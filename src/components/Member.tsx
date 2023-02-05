import { useEffect, useState } from "react"

interface MemberProps {
    id: number
    name: string
    active: boolean
    thumbnail_url?: string
}


export default function Member(member: MemberProps) {

    const [profile, setProfile] = useState({})
    useEffect(() => {
        setProfile(member)
    })
    

    return (
        <div className="p-1 md:p-2">
            <h4 className="text-green-700">{profile.name}</h4>
            {profile.thumbnail_url && 
            <img alt={profile.name} 
                className="block object-cover object-center w-40 h-40 rounded-lg"
                src={profile.thumbnail_url} />
            }
        </div>
    )
}
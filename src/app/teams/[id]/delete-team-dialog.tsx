"use client";

import { useRouter } from "next/navigation";
import { TeamsService } from "@/api/teamApi";
import ConfirmDestructiveDialog from "@/app/components/confirm-destructive-dialog";
import { clientAuthProvider } from "@/lib/authProvider";

interface DeleteTeamDialogProps {
    readonly teamId: string;
    readonly teamName: string;
    readonly onCancel: () => void;
}

export default function DeleteTeamDialog({
    teamId,
    teamName,
    onCancel,
}: DeleteTeamDialogProps) {
    const router = useRouter();
    const service = new TeamsService(clientAuthProvider);

    async function handleDelete() {
        try {
            await service.deleteTeam(teamId);
            router.push("/teams");
            router.refresh();
        } catch (e) {
            console.error(e);
            alert("Error deleting team");
        }
    }

    return (
        <ConfirmDestructiveDialog
            title="Delete team"
            description={
                <p>
                    Are you sure you want to delete{" "}
                    <span className="font-semibold">{teamName}</span>?
                </p>
            }
            confirmLabel="Delete"
            pendingLabel="Deleting..."
            onConfirm={handleDelete}
            onCancel={onCancel}
        />
    );
}
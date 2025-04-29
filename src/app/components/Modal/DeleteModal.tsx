"use client";
import { FiAlertTriangle } from "react-icons/fi";

interface DeleteModalProps {
  isOpen: boolean;
  userName: string;
  onClose: () => void;
  onConfirm: () => void;
  isLoading: boolean;
}

export function DeleteModal({
  isOpen,
  userName,
  onClose,
  onConfirm,
  isLoading,
}: DeleteModalProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay com blur */}
      <div className="fixed inset-0 backdrop-blur-sm z-40"></div>

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
          <div className="flex items-start gap-4">
            <FiAlertTriangle className="text-red-500 text-2xl mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-medium">Confirmar exclusão</h3>
              <p className="mt-2 text-gray-600">
                Tem certeza que deseja excluir o usuário{" "}
                <strong>{userName}</strong>? Esta ação não pode ser desfeita.
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button
              onClick={onClose}
              disabled={isLoading}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Cancelar
            </button>
            <button
              onClick={onConfirm}
              disabled={isLoading}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 disabled:bg-red-300 transition-colors cursor-pointer"
            >
              {isLoading ? "Bloqueando..." : "Confirmar"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

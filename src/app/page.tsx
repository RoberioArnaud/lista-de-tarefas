import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge";
import { CirclePlus, List, Check, OctagonX, SquarePen, Trash2, ListCheck, Sigma } from 'lucide-react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,} from "@/components/ui/alert-dialog"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Home = () => (
  <main className="w-full h-screen bg-gray-100 flex justify-center items-center">
    <Card className="w-lg">
      <CardHeader className="flex gap-2">
        <Input placeholder="Adicionar Tarefa" />
        <Button variant="default" className="cursor-pointer"><CirclePlus /> Cadastrar</Button>
      </CardHeader>


      <CardContent>
        <Separator className="mb-4" />

        <div className="flex gap-2 cursor-pointer">
          <Badge variant="default"><List />Todas</Badge>
          <Badge variant="outline"><OctagonX />Não Finalizados</Badge>
          <Badge variant="outline"><Check />Concluídos</Badge>
        </div>

        <div className="mt-4 border-b">

          <div className="h-14 flex justify-between items-center border-b border-t border-e">
            <div className="w-2 h-full bg-green-300"></div>
            <p className="flex-1 px-3 text-sm">Estudar React</p>

            <div className="flex items-center gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <SquarePen size={18} className="cursor-pointer" />
                  </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                      <DialogTitle><p>Editar tarefa</p></DialogTitle>
                    </DialogHeader>

                  <div className=" flex gap-3 items-center">
                      <Input placeholder="Editar Tarefa"/>
                      <Button className="cursor-pointer">Editar</Button>
                  </div>

                </DialogContent>
              </Dialog>            
              <Trash2 size={18} className="cursor-pointer mr-2" />
            </div>
          </div>

        </div>


        <div className="flex justify-between mt-5">

          <div className="flex gap-2 items-center">
            <ListCheck size={18} />
            <p className="text-xs">Tarefas Concluidas (3/3)</p>
          </div>
          
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="text-xs h-7 cursor-pointer " variant="outline"><Trash2 /> Limpar tarefas concluídas</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>  
              <AlertDialogHeader>
                <AlertDialogTitle>Tem certeza que deseja excluir x itens?</AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction>Sim</AlertDialogAction>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>    

        </div>

        <div className="h-2.5 w-full bg-gray-100 mt-3 rounded-md">
          <div className="h-full bg-blue-500 rounded-md" style={{ width: "50%" }}></div>
        </div>

        <div className="flex justify-end items-center mt-3 gap-1">
          <Sigma size={18} />
          <p className="text-xs">3 Tarefas no total</p>

        </div>



      </CardContent>

    </Card>
  </main>
)

export default Home 
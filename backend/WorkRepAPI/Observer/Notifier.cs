namespace WorkRepAPI.Observer
{
    public class Notifier : ISubject
    {
        private List<IObserver> _observers = new List<IObserver>();

        public void Attach(IObserver observer)
        {
            _observers.Add(observer);
        }

        public void Detach(IObserver observer)
        {
            _observers.Remove(observer);
        }

        public void Notify(string message, int legajo)
        {
          //  var obser = _observers;
            foreach (var observer in _observers)
            {
                if (observer.getLegajo() == legajo)
                {
                    observer.Update(message);
                }
                
            }
        }
    }
}
